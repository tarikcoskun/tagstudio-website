import type { IconList } from "./types/icon-list"

interface DownloadOption {
	link: string
	icon: IconList
}

export const downloads = {
	Windows: {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_windows_x86_64.zip",
		icon: "standalone:windows",
	},
	"Windows (portable)": {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_windows_x86_64_portable.zip",
		icon: "standalone:windows",
	},
	"Mac (Intel)": {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_macos_x86_64.tar.gz",
		icon: "standalone:apple",
	},
	"Mac (Apple Silicon)": {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_macos_aarch64.tar.gz",
		icon: "standalone:apple",
	},
	Linux: {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_linux_x86_64.tar.gz",
		icon: "lucide:download",
	},
	"Linux (portable)": {
		link: "https://github.com/TagStudioDev/TagStudio/releases/latest/download/tagstudio_linux_x86_64_portable.tar.gz",
		icon: "lucide:download",
	},
} satisfies Record<string, DownloadOption>

export type Platforms = keyof typeof downloads
