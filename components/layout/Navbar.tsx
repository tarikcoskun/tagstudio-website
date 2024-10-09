"use client";

import React from "react";
import dynamic from "next/dynamic";

// Data
import { navbarLinks } from "@/config/layout";

// Components
import Link from "next/link";
import { Icon } from "../Icon";

// Styles
import style from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const DownloadButton = dynamic(() => import("./DownloadButton"), { ssr: false });

export function Navbar() {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenu) document.body.style.overflow = "hidden";
    else document.body.removeAttribute("style");
  }, [mobileMenu]);

  React.useEffect(() => {
    const listener = () => setMobileMenu(false);

    window.addEventListener("hashchange", listener);
    return () => window.removeEventListener("hashchange", listener);
  }, []);

  return (
    <header role="banner" className={cx("container", "contentPadding")}>
      <div className={cx("navbar")}>
        <Link href="/" aria-label="Home" className={cx("logo")}>
          <img src="/icon.png" alt="" width={28} height={28} />
          <span>TagStudio</span>
        </Link>

        <nav
          data-state={mobileMenu ? "open" : "closed"}
          className={cx("navigation")}
        >
          <ul className={cx("links")}>
            {navbarLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("http")
                  ? (
                      <a href={link.href} className={cx("link")}>
                        {link.label}
                      </a>
                    )
                  : (
                      <Link href={link.href} className={cx("link")}>
                        {link.label}
                      </Link>
                    )}
              </li>
            ))}
          </ul>
        </nav>

        <DownloadButton />

        <button
          type="button"
          className={cx("mobile-menu-button")}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenu((val) => !val)}
        >
          <Icon lib="lucide" icon={mobileMenu ? "x" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
