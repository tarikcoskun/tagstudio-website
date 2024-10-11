import { Icon } from "@/components/Icon";
import { Apple } from "@/components/Icon/standalone/Apple";
import { Windows } from "@/components/Icon/standalone/Windows";

export type Platforms = "Linux" | "Mac" | "Windows" | "Android" | "iOS";
export type SupportedPlatforms = "Linux" | "Mac" | "Windows";

export const downloads = {
  "Windows": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_windows_x86_64.zip",
    icon: <Windows />,
  },
  "Windows (portable)": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_windows_x86_64_portable.zip",
    icon: <Windows />,
  },
  "Mac": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_macos_x86_64.tar.gz",
    icon: <Apple />,
  },
  "Mac (ARM)": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_macos_aarch64.tar.gz",
    icon: <Apple />,
  },
  "Linux": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_linux_x86_64.tar.gz",
    icon: <Icon lib="lucide" icon="download" />,
  },
  "Linux (portable)": {
    link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_linux_x86_64_portable.tar.gz",
    icon: <Icon lib="lucide" icon="download" />,
  },
};
