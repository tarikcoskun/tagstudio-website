"use client";

import { motion } from "framer-motion";
import { motionContainerProps, motionItemProps } from "./motion";

// Components
import { DownloadButton } from "@/components/DownloadButton";

// Styles
import style from "./CTA.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function CTA() {
  return (
    <section className={cx("cta")}>
      <div className={cx("grid-container")}>
        <div className={cx("grid")} />
      </div>
      <motion.div className={cx("text-container")} {...motionContainerProps}>
        <motion.h1 {...motionItemProps}>Start organizing</motion.h1>
        <motion.div className={cx("buttons")} {...motionItemProps}>
          <DownloadButton />
        </motion.div>
      </motion.div>
    </section>
  );
}
