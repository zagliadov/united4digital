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
    <div className="w-auto h-auto max-w-[730px] max-h-[460px] bg-white">
      <Lottie options={defaultOptions} />
    </div>
  );
}
