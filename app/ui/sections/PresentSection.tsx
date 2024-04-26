// import LogoLottie from "./components/LottieImage/LogoLottie";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("./components/LottieImage/LogoLottie"), {
  loading: () => <p>Loading...</p>,
});

export default function PresentSection() {
  return (
    <section className="bg-primary h-screen flex flex-col justify-center items-center ">
      <DynamicLottie />
    </section>
  );
}
