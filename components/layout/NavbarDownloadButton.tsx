import React from "react";
import { getOs } from "@/util/getOs";

// Data
import { downloads, type Platforms } from "@/config/links";

// Components
import { Button } from "../Button";

// Styles
import style from "./NavbarDownloadButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function NavbarDownloadButton() {
  const [os, setOs] = React.useState<Platforms | null>(null);
  const OsIcon = os ? downloads[os].icon : downloads.Linux.icon;

  React.useEffect(() => {
    const detectedOs = getOs();
    setOs(detectedOs);
  }, []);

  return (
    <Button
      as="a"
      href={os ? downloads[os].link : ""}
      color="surface"
      className={cx("download-button")}
      leading={OsIcon}
    >
      Download
    </Button>
  );
}
