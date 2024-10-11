"use client";

import { motion } from "framer-motion";
import { animateChild, animateContainer } from "./motion";

// Components
import { Button } from "@/components/Button";
import { Icon, type IconList } from "@/components/Icon";
import { Github } from "@/components/Icon/standalone/Github";
import { DownloadButton } from "@/components/DownloadButton";

// Styles
import style from "./HomePage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface Feature {
  icon: IconList<"solar">;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "tag",
    title: "Tags",
    description: "The power of tagging, doubled with tag composition.",
  },
  {
    icon: "library",
    title: "Libraries",
    description: "Libraries contain the representations of your files combined with metadata fields.",
  },
  {
    icon: "document",
    title: "Metadata",
    description: "Add metadata to your library entries such as name, author, artist.",
  },
  {
    icon: "search",
    title: "Search",
    description: "Search for entries based on tags, file names or file types.",
  },
  {
    icon: "filter",
    title: "Filter",
    description: "Special search conditions for untagged/empty entries.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className={cx("hero", "contentPadding")}>
        <motion.div className={cx("text-container")} {...animateContainer}>
          <motion.h1 {...animateChild}>The file manager<br />of your dreams</motion.h1>
          <motion.p {...animateChild}>A document management system that helps you organize with advanced tagging. Designed for all your <span style={{ textDecoration: "line-through" }}>memes</span> needs.</motion.p>
          <motion.div {...animateChild} className={cx("buttons")}>
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
          </motion.div>
        </motion.div>
      </section>

      {/* <section className={cx("showcase")}>
        <div className={cx("text-container")}>
          <h2>Get rid of the clutter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem maiores suscipit nesciunt tenetur.</p>
        </div>
        <div className={cx("items")}>
          {Array.from({ length: 20 }).map((_, idx) => (
            <div key={idx} className={cx("item")}>{idx + 1}</div>
          ))}
        </div>
      </section> */}

      <motion.section className={cx("features", "contentPadding")} {...animateContainer}>
        <motion.h2 {...animateChild}>Features</motion.h2>
        <motion.div className={cx("grid")} {...animateChild}>
          {features.map((feature) => (
            <div key={feature.title} className={cx("feature")}>
              <Icon lib="solar" icon={feature.icon} size={32} />
              <h6>{feature.title}</h6>
              <p>{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <section className={cx("cta", "contentPadding")}>
        <div className={cx("grid-container")}>
          <div className={cx("grid")} />
        </div>
        <motion.div className={cx("text-container")} {...animateContainer}>
          <motion.h1 {...animateChild}>Start organizing</motion.h1>
          <motion.div className={cx("buttons")} {...animateChild}>
            <DownloadButton />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
