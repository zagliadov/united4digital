import dynamic from "next/dynamic";
// import Footer from "@/app/ui/Footer/Footer";
// import Header from "@/app/ui/Header/Header";
// import PresentSection from "@/app/ui/sections/PresentSection";
// import AboutUsSection from "@/app/ui/sections/AboutUsSection";
// import PublishersSection from "@/app/ui/sections/PublishersSection";
// import AdvertisersSection from "@/app/ui/sections/AdvertisersSection";
// import ContactUsSection from "@/app/ui/sections/ContactUsSection";
// import MediaSection from "@/app/ui/sections/MediaSection";
// const DynamicHeader = dynamic(() => import('../components/header'), {
//   loading: () => <p>Loading...</p>,
// })

const DynamicFooter = dynamic(() => import("@/app/ui/Footer/Footer"), {
  loading: () => <p>Loading...</p>,
});

const DynamicHeader = dynamic(() => import("@/app/ui/Header/Header"), {
  loading: () => <p>Loading...</p>,
});

const DynamicPresentSection = dynamic(() => import("@/app/ui/sections/PresentSection"), {
  loading: () => <p>Loading...</p>,
});

const DynamicAboutUsSection = dynamic(() => import("@/app/ui/sections/AboutUsSection"), {
  loading: () => <p>Loading...</p>,
});

const DynamicPublishersSection = dynamic(() => import("@/app/ui/sections/PublishersSection"), {
  loading: () => <p>Loading...</p>,
});

const DynamicAdvertisersSection = dynamic(() => import("@/app/ui/sections/AdvertisersSection"), {
  loading: () => <p>Loading...</p>,
});

const DynamicContactUsSection = dynamic(() => import("@/app/ui/sections/ContactUsSection"), {
  loading: () => <p>Loading...</p>,
});

const DynamicMediaSection = dynamic(() => import("@/app/ui/sections/MediaSection"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <DynamicHeader />
      <main className="flex-grow overflow-x-hidden">
        <DynamicPresentSection />
        <DynamicAboutUsSection />
        <DynamicPublishersSection />
        <DynamicAdvertisersSection />
        <DynamicMediaSection />
        <DynamicContactUsSection />
      </main>
      <DynamicFooter />
    </>
  );
}
