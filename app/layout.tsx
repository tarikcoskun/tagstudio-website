import type { Metadata } from "next";

import { MotionConfig } from "framer-motion";

// Styles
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const fontInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TagStudio",
  description: "TagStudio is a photo & file organization application with an underlying system that focuses on giving freedom and flexibility to the user.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" style={{ fontFamily: fontInter.style.fontFamily }}>
      <body>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
