import type { Platforms } from "@/config/links";

export function getOs() {
  const userAgent = window.navigator.userAgent;
  let os: Platforms = "Windows";

  if (userAgent.includes("Win")) os = "Windows";
  else if (userAgent.includes("Mac")) os = "Mac";
  else if (userAgent.includes("Linux")) os = "Linux";

  return os;
}
