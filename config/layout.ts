export interface GenericLink {
  label: string;
  href: string;
}

export const navbarLinks: GenericLink[] = [
  {
    label: "Documentation",
    href: "https://docs.tagstud.io",
  },
  {
    label: "Changelog",
    href: "/changelog",
  },
];

export const footerLinks: Record<string, GenericLink[]> = {
  Resources: [
    {
      label: "Documentation",
      href: "https://docs.tagstud.io",
    },
    {
      label: "Changelog",
      href: "/changelog",
    },
  ],
  Community: [
    {
      label: "GitHub",
      href: "https://github.com/TagStudioDev/TagStudio",
    },
    {
      label: "Discord",
      href: "https://discord.com/invite/hRNnVKhF2G",
    },
  ],
};
