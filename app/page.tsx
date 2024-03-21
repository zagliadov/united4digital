import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";
import PresentSection from "@/app/ui/sections/PresentSection";
import AboutUsSection from "@/app/ui/sections/AboutUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PresentSection />
        <AboutUsSection />
      </main>
      <Footer />
    </>
  );
}
