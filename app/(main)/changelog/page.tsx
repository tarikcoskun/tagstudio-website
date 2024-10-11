import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ChangelogPage } from "@/modules/changelog/ChangelogPage";

export interface FrontMatter {
  title: string;
  date: string;
}

export interface Post {
  fileName: string;
  frontMatter: FrontMatter;
  content: string;
}

export default function ChangelogPageWrapper() {
  const postsDir = path.join(process.cwd(), "docs/changelog");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((fileName) => {
    const filePath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return { fileName, fileContent };
  });

  const content = posts.map((post) => {
    const { data, content } = matter(post.fileContent);
    const frontMatter = data as FrontMatter;
    return { fileName: post.fileName.replace(".mdx", ""), frontMatter, content };
  });

  return <ChangelogPage data={content} />;
}
