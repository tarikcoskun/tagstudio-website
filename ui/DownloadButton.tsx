"use client";

import { getOs } from "@/util/getOs";
import { downloads } from "@/config/links";

// Components
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";

export default function DownloadButton() {
  const os = getOs();
  const OsIcon = downloads[os].icon;

  return (
    <Dropdown>
      <Button.Group>
        <Button as="a" href={downloads[os].link} color="surface" leading={OsIcon}>
          Download for {os}
        </Button>
        <Dropdown.Trigger color="surface" padding="square" aria-label="Show more options">
          <Icon lib="lucide" icon="chevron-down" size={16} />
        </Dropdown.Trigger>
      </Button.Group>

      <Dropdown.Menu>
        <Dropdown.MenuGroup>
          {Object.entries(downloads).filter(([platform]) => platform !== os).map(([platform, properties]) => (
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
