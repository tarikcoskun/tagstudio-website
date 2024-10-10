"use client";

import React from "react";
import { getOs } from "@/util/getOs";

// Data
import { downloads, type Platforms } from "@/config/links";

// Components
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";

export function DownloadButton() {
  const [os, setOs] = React.useState<Platforms | null>(null);
  const OsIcon = os ? downloads[os].icon : downloads.Linux.icon;

  React.useEffect(() => {
    const detectedOs = getOs();
    setOs(detectedOs);
  }, []);

  return (
    <Dropdown>
      <Button.Group>
        <Button as="a" href={os ? downloads[os].link : ""} color="surface" leading={OsIcon}>
          Download for {os || "..."}
        </Button>
        <Dropdown.Trigger color="surface" padding="square" aria-label="Show more options">
          <Icon lib="lucide" icon="chevron-down" size={16} />
        </Dropdown.Trigger>
      </Button.Group>

      <Dropdown.Menu>
        <Dropdown.MenuGroup>
          {Object.entries(downloads).filter(([platform]) => platform !== os).sort((_, [b]) => b.includes(os as string) ? 1 : -1).map(([platform, properties]) => (
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
