import { promises as fs } from "fs";
import path from "path";

(async () => {
  console.log("Adding time built to output...");
  const indexHTMLPath = path.resolve("dist", "index.html");
  console.log(indexHTMLPath);
  const contents = await fs.readFile(indexHTMLPath, "utf8");
  const newContent = contents.replace(
    "<body>",
    `
    <body>
    <span style="color: white; position: absolute; inset: 0">Preview last updated: ${new Intl.DateTimeFormat(
      "nl-NL",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }
    ).format(new Date())}</span>
  `
  );
  await fs.writeFile(indexHTMLPath, newContent, "utf8");
  console.log("Added time built to output");
})();
