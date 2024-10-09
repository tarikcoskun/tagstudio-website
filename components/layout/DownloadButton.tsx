import { getOs } from "@/util/getOs";

// Data
import { downloads } from "@/config/links";

// Components
import { Button } from "../Button";

// Styles
import style from "./DownloadButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function NavbarDownloadButton() {
  const os = getOs();
  const OsIcon = downloads[os].icon;

  return (
    <Button
      as="a"
      href={downloads[os].link}
      color="surface"
      className={cx("download-button")}
      leading={OsIcon}
    >
      Download
    </Button>
  );
}
