import Image from "next/image";

export default function PresentSection() {
  return (
    <section className="bg-primary h-screen flex flex-col justify-center items-center tablet:relative">
      <Image
        src="/anim.gif"
        width={1280}
        height={720}
        alt="We are united to bring the best traffic quality in digital world."
      />
      <h1 className="tablet:absolute tablet:top-[60%] text-center tablet:text-3xl text-2xl text-white leading-9">
        We are united to bring the best traffic quality in digital world.
      </h1>
    </section>
  );
}
