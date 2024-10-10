// Components
import { Hero } from "@/ui/Hero";
import { Showcase } from "@/ui/Showcase";
import { Features } from "@/ui/Features";
import { CTA } from "@/ui/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Showcase /> */}
      <Features />
      <CTA />
    </main>
  );
}
