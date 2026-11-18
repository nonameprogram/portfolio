// Posts (or updates) a single Lighthouse results comment on every open PR
// that contains the pushed commit. Run from actions/github-script after
// `lhci autorun`; reads the files LHCI leaves in .lighthouseci/.
const fs = require("node:fs");
const path = require("node:path");

const LHCI_DIR = ".lighthouseci";
const MARKER = "<!-- lighthouse-ci-results -->";
const CATEGORIES = [
  ["performance", "Performance"],
  ["accessibility", "Accessibility"],
  ["best-practices", "Best Practices"],
  ["seo", "SEO"],
];
const METRICS = [
  ["first-contentful-paint", "FCP"],
  ["largest-contentful-paint", "LCP"],
  ["total-blocking-time", "TBT"],
  ["cumulative-layout-shift", "CLS"],
  ["speed-index", "Speed Index"],
];

// Returns `undefined` when the file does not exist.
const readJson = (file) => {
  try {
    return JSON.parse(fs.readFileSync(path.join(LHCI_DIR, file), "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }
};

const listLhrFiles = () => {
  try {
    return fs
      .readdirSync(LHCI_DIR)
      .filter((file) => file.startsWith("lhr-") && file.endsWith(".json"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
};

const scoreBadge = (score) => {
  if (score >= 90) {
    return "🟢";
  }
  if (score >= 50) {
    return "🟠";
  }
  return "🔴";
};

const pageLabel = (url) => {
  try {
    const { pathname, search } = new URL(url);
    return `\`${pathname}${search}\``;
  } catch {
    return `\`${url}\``;
  }
};

const loadRunsByUrl = () => {
  const runs = new Map();
  for (const file of listLhrFiles()) {
    const lhr = readJson(file);
    const url = lhr.requestedUrl;
    runs.set(url, [...(runs.get(url) ?? []), lhr]);
  }
  return runs;
};

const scoreCell = (lhrs, id) => {
  const values = lhrs
    .map((lhr) => lhr.categories[id]?.score)
    .filter((value) => typeof value === "number");
  if (values.length === 0) {
    return "–";
  }
  const score = Math.round(median(values) * 100);
  return `${scoreBadge(score)} ${score}`;
};

// Metrics come from an actual run: the one with the median performance score.
const representativeRun = (lhrs) => {
  const sorted = [...lhrs].sort(
    (a, b) =>
      (a.categories.performance?.score ?? 0) -
      (b.categories.performance?.score ?? 0)
  );
  return sorted[Math.floor((sorted.length - 1) / 2)];
};

const renderScoresTable = (runsByUrl, links) => {
  const header = `| Page | ${CATEGORIES.map(([, label]) => label).join(" | ")} | Report |`;
  const divider = `| --- | ${CATEGORIES.map(() => ":---:").join(" | ")} | --- |`;
  const rows = [...runsByUrl].map(([url, lhrs]) => {
    const scores = CATEGORIES.map(([id]) => scoreCell(lhrs, id)).join(" | ");
    const report = links[url] ? `[View report ↗](${links[url]})` : "–";
    return `| ${pageLabel(url)} | ${scores} | ${report} |`;
  });
  return [header, divider, ...rows].join("\n");
};

const renderMetricsTable = (runsByUrl) => {
  const header = `| Page | ${METRICS.map(([, label]) => label).join(" | ")} |`;
  const divider = `| --- | ${METRICS.map(() => ":---:").join(" | ")} |`;
  const rows = [...runsByUrl].map(([url, lhrs]) => {
    const run = representativeRun(lhrs);
    const values = METRICS.map(
      ([id]) => run.audits[id]?.displayValue ?? "–"
    ).join(" | ");
    return `| ${pageLabel(url)} | ${values} |`;
  });
  return [header, divider, ...rows].join("\n");
};

const formatValue = (value) =>
  typeof value === "number" ? Math.round(value * 100) / 100 : value;

const summarizeAssertions = (assertions) => {
  if (assertions === undefined) {
    return { status: "⚪ Assertion results unavailable", failed: [] };
  }
  const failed = assertions.filter((result) => !result.passed);
  const errors = failed.filter((result) => result.level === "error").length;
  const warnings = failed.length - errors;
  if (errors > 0) {
    return {
      status: `❌ Failed — ${errors} error${errors === 1 ? "" : "s"}${warnings ? `, ${warnings} warning${warnings === 1 ? "" : "s"}` : ""}`,
      failed,
    };
  }
  if (warnings > 0) {
    return {
      status: `⚠️ Passed with ${warnings} warning${warnings === 1 ? "" : "s"}`,
      failed,
    };
  }
  return { status: "✅ All assertions passed", failed };
};

const renderAssertionDetails = (failed) => {
  if (failed.length === 0) {
    return "";
  }
  const rows = failed.map((result) => {
    const level = result.level === "error" ? "❌ Error" : "⚠️ Warning";
    const id = result.auditProperty
      ? `${result.auditId}.${result.auditProperty}`
      : result.auditId;
    const audit = result.auditDocumentationLink
      ? `[\`${id}\`](${result.auditDocumentationLink})`
      : `\`${id}\``;
    return `| ${level} | ${audit} | ${result.auditTitle ?? ""} | ${result.operator} ${formatValue(result.expected)} | ${formatValue(result.actual)} |`;
  });
  return [
    "<details>",
    `<summary>Assertion details (${failed.length})</summary>`,
    "",
    "| Level | Audit | Description | Expected | Actual |",
    "| --- | --- | --- | :---: | :---: |",
    ...rows,
    "",
    "</details>",
  ].join("\n");
};

const buildBody = ({ sha, commitUrl, runUrl }) => {
  const runsByUrl = loadRunsByUrl();
  const shortSha = `[\`${sha.slice(0, 7)}\`](${commitUrl})`;
  const footer = `<sub>Commit ${shortSha} · [Workflow run](${runUrl})</sub>`;

  if (runsByUrl.size === 0) {
    return [
      MARKER,
      "## Lighthouse Report",
      "",
      "**⚪ No results** — Lighthouse did not produce any reports for this commit. See the workflow run for details.",
      "",
      footer,
    ].join("\n");
  }

  const links = readJson("links.json") ?? {};
  const { status, failed } = summarizeAssertions(
    readJson("assertion-results.json")
  );
  const runCount = Math.max(...[...runsByUrl.values()].map((l) => l.length));

  return [
    MARKER,
    "## Lighthouse Report",
    "",
    `**${status}** · median of ${runCount} run${runCount === 1 ? "" : "s"}`,
    "",
    renderScoresTable(runsByUrl, links),
    "",
    "<details>",
    "<summary>Performance metrics</summary>",
    "",
    renderMetricsTable(runsByUrl),
    "",
    "</details>",
    "",
    renderAssertionDetails(failed),
    "",
    footer,
  ].join("\n");
};

const upsertComment = async ({ github, core, owner, repo, number, body }) => {
  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number: number,
    per_page: 100,
  });
  const existing = comments.find(
    (comment) => comment.user?.type === "Bot" && comment.body?.includes(MARKER)
  );
  if (existing) {
    await github.rest.issues.updateComment({
      owner,
      repo,
      comment_id: existing.id,
      body,
    });
    core.info(`Updated Lighthouse comment on #${number}`);
    return;
  }
  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body,
  });
  core.info(`Created Lighthouse comment on #${number}`);
};

module.exports = async ({ github, context, core }) => {
  const {
    repo: { owner, repo },
    sha,
    serverUrl,
    runId,
  } = context;
  const repoUrl = `${serverUrl}/${owner}/${repo}`;
  const body = buildBody({
    sha,
    commitUrl: `${repoUrl}/commit/${sha}`,
    runUrl: `${repoUrl}/actions/runs/${runId}`,
  });
  await core.summary.addRaw(body.replace(MARKER, "")).write();

  const pulls = await github.paginate(
    github.rest.repos.listPullRequestsAssociatedWithCommit,
    { owner, repo, commit_sha: sha, per_page: 100 }
  );
  const openPulls = pulls.filter((pull) => pull.state === "open");
  if (openPulls.length === 0) {
    core.info("No open pull request for this commit; skipping comment.");
    return;
  }

  await Promise.all(
    openPulls.map((pull) =>
      upsertComment({ github, core, owner, repo, number: pull.number, body })
    )
  );
};
