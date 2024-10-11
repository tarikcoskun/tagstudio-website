// Data
import { footerLinks } from "@/config/layout";

// Components
import Link from "next/link";
import { Icon } from "../Icon";

// Styles
import style from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function Footer() {
  return (
    <footer className={cx("container", "contentPadding")}>
      <div className={cx("footer")}>
        <nav className={cx("sections")}>
          <div className={cx("brand")}>
            <div className={cx("logo")}>
              <img src="/tagstudio-website/icon.png" alt="" width={28} height={28} />
              <span>TagStudio</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <section key={category} className={cx("section")}>
              <span className={cx("label")}>{category}</span>
              <ul className={cx("links")}>
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http")
                      ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx("link")}
                          >
                            <span>{link.label}</span> <Icon lib="lucide" icon="external-link" size={14} />
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
            </section>
          ))}
        </nav>
      </div>
    </footer>
  );
}
