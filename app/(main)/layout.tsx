// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <noscript>
        <style dangerouslySetInnerHTML={{
          __html: "[style*=\"opacity:0\"] { opacity: unset !important; transform: unset !important; }",
        }}
        />
      </noscript>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
