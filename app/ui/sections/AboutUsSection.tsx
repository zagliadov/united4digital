import Image from "next/image";
import * as _ from "lodash";
import OfferCard from "@/app/ui/sections/components/OfferCard/OfferCard";

interface IOfferList {
  src: string;
  alt: string;
  text: string;
}
const offerList: IOfferList[] = [
  {
    src: "/offerIconOne.svg",
    alt: "Offer comprehensive solution",
    text: `At United4Digital, we offer comprehensive solutions tailored to innovate
  the dynamic landscape of digital marketing. Whether through our
  proprietary video streaming applications or exclusive exchanges for
  advertisers and publishers, we strive to forge a seamless synergy
  between our clients' objectives and their audience. Our focus lies in
  managing the entirety of the advertising framework, digital
  monetization, and strategic planning with a cohesive approach.`,
  },
  {
    src: "/offerIconTwo.svg",
    alt: "We specialize in providing scalable",
    text: `We specialize in providing scalable, high quality, and trusted
  inventory across various platforms including Display, Connected TV,
  InApp, and Audio. Through meticulous selection processes, we handpick top-tier publishers and emerging high-quality content to
  ensure that all our partners deliver a valuable advertising experience.
  `,
  },
  {
    src: "/offerIconThree.svg",
    alt: "United4Digital is committed to maintaining the utmost quality",
    text: `United4Digital is committed to maintaining the utmost quality of
  traffic through strategic partnerships with leading data transparency
  providers and anti-fraud protection systems. Our dedication to excellence ensures that our clients receive nothing short of the best
  in traffic quality.`,
  },
];
export default function AboutUsSection() {
  return (
    <section className="h-auto px-4 tablet:py-24">
        <div className="tablet:flex tablet:items-center tablet:container tablet:mx-auto tablet:justify-between">
          <div className="text-primary">
            <h2 className="text-center text-4xl font-bold py-4 tablet:text-start tablet:pb-16">About us</h2>
            <h3 className="text-center text-3xl font-bold py-4 tablet:text-start tablet:pb-8 tablet:pt-0">
              The company&apos;s mission
            </h3>
            <p className="text-center text-lg py-7 tablet:text-start tablet:max-w-[500px] tablet:py-0">
              United4Digital is aimed to offer wide range solutions designed to
              businesses to maximize the revenue potential by means of variety
              of digital ads.
            </p>
            <p className="text-center text-lg py-7 tablet:text-start tablet:max-w-[500px]">
              United4Digital is dedicated to empowering businesses with a wide
              range of digital advertising solutions aimed at optimizing revenue
              potential.
            </p>
          </div>
          <div>
            <Image
              src="/rectangle.svg"
              width={730}
              height={459}
              alt="rectangle image"
            />
          </div>
        </div>
        <div className="tablet:pt-20 py-10 tablet:flex tablet:container tablet:mx-auto">
          {_.map(offerList, ({ src, alt, text }: IOfferList, index: number) => {
            return (
              <OfferCard
                src={src}
                alt={alt}
                text={text}
                className={`${index && "mt-6 tablet:mt-0 tablet:ml-6"}`}
              />
            );
          })}
        </div>
    </section>
  );
}
