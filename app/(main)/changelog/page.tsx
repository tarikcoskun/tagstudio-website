import fs from "node:fs";
import path from "node:path";
import { serialize } from "next-mdx-remote/serialize";
import { ChangelogPage } from "@/modules/changelog/ChangelogPage";

export interface FrontMatter {
  title: string;
  date: string;
}

export default async function ChangelogPageWrapper() {
  const changelogsDir = path.join(process.cwd(), "docs/changelog");
  const files = fs.readdirSync(changelogsDir);

  const changelogs = files.map((fileName) => {
    const filePath = path.join(changelogsDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return { fileName, fileContent };
  });

  const content = await Promise.all(changelogs.map(async (changelog) => {
    return {
      ...changelog,
      mdxSource: await serialize<Record<string, unknown>, FrontMatter>(changelog.fileContent, { parseFrontmatter: true }),
    };
  }));

  return <ChangelogPage data={content} />;
}
