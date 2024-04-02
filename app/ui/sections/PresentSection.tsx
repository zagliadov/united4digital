import Image from "next/image";

export default function PresentSection() {
  return (
    <section className="bg-primary h-screen flex flex-col justify-center items-center laptop:relative">
      <Image
        src="/anim.gif"
        width={0}
        height={0}
        alt="We are united to bring the best traffic quality in digital world."
        className="w-auto h-auto"
        priority
        unoptimized={true}
      />
      <h1 className="laptop:absolute laptop:top-[65%] text-center laptop:text-3xl text-2xl text-white leading-9">
        We are united to bring the best traffic quality in digital world.
      </h1>
    </section>
  );
}
