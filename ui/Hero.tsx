"use client";

import dynamic from "next/dynamic";

// Components
import { Button } from "@/components/Button";
import { Github } from "@/components/Icon/standalone/Github";

// Styles
import style from "./Hero.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const DownloadButton = dynamic(() => import("./DownloadButton"), { ssr: false });

export function Hero() {
  return (
    <section className={cx("hero")}>
      <div className={cx("text-container")}>
        <h1>The file manager<br />of your dreams</h1>
        <p>A document management system that helps you organize with advanced tagging. Designed for all your <span style={{ textDecoration: "line-through" }}>memes</span> needs.</p>
        <div className={cx("buttons")}>
          <DownloadButton />
          <Button
            as="a"
            href="https://github.com/TagStudioDev/TagStudio"
            target="_blank"
            rel="noopener noreferrer"
            color="surface"
            variant="soft"
            leading={<Github />}
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
