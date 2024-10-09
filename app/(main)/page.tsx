// Components
import { Hero } from "@/ui/Hero";
import { Showcase } from "@/ui/Showcase";
import { Features } from "@/ui/Features";
import { CTA } from "@/ui/CTA";

// Styles
import style from "./page.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function HomePage() {
  return (
    <main className={cx("page")}>
      <Hero />
      {/* <Showcase /> */}
      <Features />
      <CTA />
    </main>
  );
}
