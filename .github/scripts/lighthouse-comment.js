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
  ["best-practices", "Best practices"],
  ["seo", "SEO"],
];
const METRICS = [
  ["first-contentful-paint", "FCP"],
  ["largest-contentful-paint", "LCP"],
  ["total-blocking-time", "TBT"],
  ["cumulative-layout-shift", "CLS"],
  ["speed-index", "Speed Index"],
];

const readJson = (file, fallback) => {
  const fullPath = path.join(LHCI_DIR, file);
  if (!fs.existsSync(fullPath)) {
    return fallback;
  }
  return JSON.parse(fs.readFileSync(fullPath, "utf8"));
};

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor((sorted.length - 1) / 2)];
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

const loadRunsByUrl = () => {
  const runs = new Map();
  for (const file of fs.readdirSync(LHCI_DIR)) {
    if (!(file.startsWith("lhr-") && file.endsWith(".json"))) {
      continue;
    }
    const lhr = readJson(file);
    const url = lhr.requestedUrl;
    runs.set(url, [...(runs.get(url) ?? []), lhr]);
  }
  return runs;
};

const renderUrlSection = (url, lhrs, reportUrl) => {
  const scores = CATEGORIES.map(([id, label]) => {
    const values = lhrs
      .map((lhr) => lhr.categories[id]?.score)
      .filter((value) => typeof value === "number");
    if (values.length === 0) {
      return `| ${label} | – |`;
    }
    const score = Math.round(median(values) * 100);
    return `| ${scoreBadge(score)} ${label} | **${score}** |`;
  });

  // Metrics come from the run with the median performance score.
  const byPerformance = [...lhrs].sort(
    (a, b) =>
      (a.categories.performance?.score ?? 0) -
      (b.categories.performance?.score ?? 0)
  );
  const representative = byPerformance[Math.floor((lhrs.length - 1) / 2)];
  const metrics = METRICS.map(
    ([id, label]) =>
      `${label} ${representative.audits[id]?.displayValue ?? "–"}`
  ).join(" · ");

  const title = reportUrl ? `[${url}](${reportUrl})` : `\`${url}\``;
  return [
    `#### ${title}`,
    "",
    "| Category | Score |",
    "| --- | --- |",
    ...scores,
    "",
    `<sub>${metrics}</sub>`,
  ].join("\n");
};

const renderAssertions = (results) => {
  const failed = results.filter((result) => !result.passed);
  if (failed.length === 0) {
    return "✅ All assertions passed.";
  }
  const lines = failed.map((result) => {
    const icon = result.level === "error" ? "❌" : "⚠️";
    const id = result.auditProperty
      ? `${result.auditId}.${result.auditProperty}`
      : result.auditId;
    const actual =
      typeof result.actual === "number"
        ? Math.round(result.actual * 100) / 100
        : result.actual;
    return `- ${icon} \`${id}\` — ${result.auditTitle ?? ""} (expected ${result.operator} ${result.expected}, found ${actual})`;
  });
  return ["**Assertions**", "", ...lines].join("\n");
};

const buildBody = (sha) => {
  const runsByUrl = loadRunsByUrl();
  const links = readJson("links.json", {});
  const assertions = readJson("assertion-results.json", []);

  if (runsByUrl.size === 0) {
    return `${MARKER}\n### 🔦 Lighthouse\n\nNo Lighthouse results were produced for \`${sha.slice(0, 7)}\`. Check the workflow logs.`;
  }

  const runCount = Math.max(...[...runsByUrl.values()].map((l) => l.length));
  const sections = [...runsByUrl].map(([url, lhrs]) =>
    renderUrlSection(url, lhrs, links[url])
  );

  return [
    MARKER,
    "### 🔦 Lighthouse",
    "",
    `Commit \`${sha.slice(0, 7)}\` · median of ${runCount} run${runCount === 1 ? "" : "s"}`,
    "",
    ...sections,
    "",
    renderAssertions(assertions),
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
  } = context;
  const body = buildBody(sha);
  await core.summary.addRaw(body.replace(MARKER, "")).write();

  const { data: pulls } =
    await github.rest.repos.listPullRequestsAssociatedWithCommit({
      owner,
      repo,
      commit_sha: sha,
    });
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
