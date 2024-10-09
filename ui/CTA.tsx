"use client";

import dynamic from "next/dynamic";

// Styles
import style from "./CTA.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const DownloadButton = dynamic(() => import("./DownloadButton"), { ssr: false });

export function CTA() {
  return (
    <section className={cx("cta")}>
      <div className={cx("grid-container")}>
        <div className={cx("grid")} />
      </div>
      <div className={cx("text-container")}>
        <h1>Start organizing</h1>
        <div className={cx("buttons")}>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
}
