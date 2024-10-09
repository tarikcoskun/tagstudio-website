import { Icon } from "@/components/Icon";
import { Apple } from "@/components/Icon/standalone/Apple";
import { Windows } from "@/components/Icon/standalone/Windows";

export type Platforms = "Linux" | "Mac" | "Windows";

export const downloads = {
  Linux: {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_linux_x86_64.tar.gz",
    icon: <Icon lib="lucide" icon="download" />,
  },
  Mac: {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_macos_x86_64.tar.gz",
    icon: <Apple />,
  },
  Windows: {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_windows_x86_64.zip",
    icon: <Windows />,
  },
};
