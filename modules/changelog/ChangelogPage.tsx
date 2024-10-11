import type { Post } from "@/app/(main)/changelog/page";

import { formatDate } from "@/util/formatDate";

// Components
import { MDXRemote } from "next-mdx-remote/rsc";

// Styles
import style from "./ChangelogPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function ChangelogPage({ data }: { data: Post[] }) {
  return (
    <main className={cx("page", "pageLayout")}>
      <header>
        <h1>Changelog</h1>
      </header>

      <div className={cx("posts")}>
        {data.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()).map((post) => (
          <article key={post.frontMatter.title} className={cx("post")}>
            <header>
              <h4>{post.frontMatter.title}</h4>
              <time dateTime={post.frontMatter.date}>{formatDate(post.frontMatter.date)}</time>
            </header>

            <div className={cx("body")}>
              <MDXRemote source={post.content} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
