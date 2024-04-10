"use client";

import Lottie from "react-lottie";
import animationData from "@/public/logoU4D.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function LogoLottie() {
  return (
    <div className="w-auto h-auto min-w-[1280px] flex justify-center max-w-[1280px] max-h-[720px] relative">
      <Lottie options={defaultOptions} />
      <h1 className="absolute top-[65%] text-center laptop:text-3xl text-2xl text-white leading-9">
        We are united to bring the best traffic quality in digital world.
      </h1>
    </div>
  );
}
