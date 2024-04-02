"use client";

import Lottie from "react-lottie";
import animationData from "@/public/about-us.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function AboutUsLottie() {
  return (
    <div className="w-auto h-auto bg-white">
      <Lottie options={defaultOptions} height={460} width={730} />
    </div>
  );
}
