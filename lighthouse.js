import * as fs from "node:fs";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
const options = {
  logLevel: "info",
  output: "html",
  onlyCategories: ["performance"],
  port: chrome.port,
};

const runnerResult = await lighthouse(
  process.env.LIGHTHOUSE_URL ?? "http://localhost:3000",
  options
);
const reportHtml = runnerResult.report;
fs.writeFileSync("lhreport.html", reportHtml);

console.log("Report is done for", runnerResult.lhr.finalDisplayedUrl);
console.log(
  "Performance score was",
  runnerResult.lhr.categories.performance.score * 100
);
