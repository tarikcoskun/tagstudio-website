"use client";

import React from "react";
import { getOs } from "@/util/getOs";

// Data
import { downloads, type Platforms, type SupportedPlatforms } from "@/config/links";

// Components
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";

export function DownloadButton() {
  const [os, setOs] = React.useState<Platforms | null>(null);
  const OsIcon = os ? downloads[os as SupportedPlatforms]?.icon : downloads.Linux.icon;

  React.useEffect(() => {
    const detectedOs = getOs();
    setOs(detectedOs);
  }, []);

  if (os === "Android" || os === "iOS") return null;

  return (
    <Dropdown>
      <Button.Group color="surface">
        <Button
          as="a"
          href={os ? downloads[os].link : "https://github.com/TagStudioDev/TagStudio/releases/latest"}
          leading={OsIcon}
        >
          Download {os ? `for ${os}` : ""}
        </Button>
        {os && (
          <Dropdown.Trigger padding="square" aria-label="Show more options">
            <Icon icon="chevron-down" size={16} />
          </Dropdown.Trigger>
        )}
      </Button.Group>

      <Dropdown.Menu>
        <Dropdown.MenuGroup>
          {Object.entries(downloads).filter(([platform]) => platform !== os).sort(([a], [b]) => b.includes(os as string) ? 1 : a.includes(os as string) ? -1 : 0).map(([platform, properties]) => (
            <Button
              key={platform}
              as="a"
              href={properties.link}
              color="surface"
              variant="ghost"
              padding="square"
              leading={properties.icon}
            >
              Download for {platform}
            </Button>
          ))}
        </Dropdown.MenuGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
}
