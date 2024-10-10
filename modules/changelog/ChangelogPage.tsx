"use client";

import type { FrontMatter } from "@/app/(main)/changelog/page";

import { formatDate } from "@/util/formatDate";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

// Components
import { Section } from "@/components/Section";

// Styles
import style from "./ChangelogPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface Props {
  data: {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, FrontMatter>;
    fileName: string;
    fileContent: string;
  }[];
}

export function ChangelogPage({ data }: Props) {
  return (
    <main className={cx("page", "pageLayout")}>
      <Section>
        <Section.Header>
          <h1>Changelog</h1>
        </Section.Header>

        <div className={cx("posts")}>
          {data.sort((a, b) => new Date(b.mdxSource.frontmatter.date).getTime() - new Date(a.mdxSource.frontmatter.date).getTime()).map((post) => (
            <article key={post.fileName} className={cx("post")}>
              <header>
                <h6>{post.mdxSource.frontmatter.title}</h6>
                <time dateTime={post.mdxSource.frontmatter.date}>{formatDate(post.mdxSource.frontmatter.date)}</time>
              </header>

              <div className={cx("body")}>
                <MDXRemote {...post.mdxSource} />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
