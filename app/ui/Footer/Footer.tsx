import Link from "next/link";
import Image from "next/image";
import * as _ from "lodash";
import { Button } from "@/app/ui/Button/Button";
import { LinkedIn } from "../Social";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-primary text-base-100">
      {/* <div className="flex-col px-4 hidden laptop:flex laptop:px-0 laptop:flex-row w-full container mx-auto">
        <div className="laptop:w-1/2">
          <nav>
            <ul className="w-full flex justify-between max-w-[500px] pt-12">
              <div>
                <Link href={`#about-us`}>
                  <li>About us</li>
                </Link>
                <Link href={`#publishers`}>
                  <li className="pt-4">Publishers</li>
                </Link>
              </div>
              <div className="max-w-[124px]">
                <Link href={`#media-buying-and-user-acquisition`}>
                  <li>Media Buying & User Acquisition</li>
                </Link>
              </div>
              <div>
                <Link href={`#advertisers`}>
                  <li>Advertisers</li>
                </Link>
                <Link href="/glossary">
                  <li className="pt-4">Glossary</li>
                </Link>
              </div>
            </ul>
          </nav>
          <div className="pt-24">
            <span>Follow us: </span>
          </div>
        </div>

        <div className="flex flex-col items-center laptop:w-1/2 pt-4">
          <div className="flex items-end justify-center">
            <div className="w-[125px] h-full">
              <Image
                src="/logo.svg"
                width={125}
                height={84}
                alt="Logotype United4Digital"
              />
            </div>
            <div className="w-[300px] pl-7">
              <p className="flex items-end font-bold text-white">
                We are united to bring the best traffic quality in digital
                world.
              </p>
            </div>
          </div>

          <div className="w-[405px]">
            <div className="flex items-center justify-between pt-7">
              <div className="flex items-start">
                <Image
                  src="/point.svg"
                  width={13}
                  height={17}
                  alt="A point on the map"
                />
                <p className="text-sm max-w-[210px] pl-3.5">
                  Corporation 123 Main Street City, State, Zip Code Country
                </p>
              </div>

              <Button label={"Contact us"} className=" w-[130px]" />
            </div>
            <div className="flex justify-end pt-14">
              <Link href="/cookie-policy" className="pl-5">
                Cookie Policy
              </Link>
              <Link href="/terms" className="pl-5">
                Terms
              </Link>
              <Link href="/privacy-policy" className="pl-5">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer p-4 container mx-auto laptop:pt-12">
        <aside>
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            alt="Logotype United4Digital"
            className="w-auto h-auto"
          />
          <p className="font-bold text-white">
            We are united to bring the best traffic quality in digital world.
          </p>
        </aside>
        <nav className="text-base">
          <h6 className="footer-title">Services</h6>
          <Link href={`/#advertisers`} className="link link-hover">
            Advertisers
          </Link>
          <Link href={`/#publishers`} className="link link-hover">
            Publishers
          </Link>
          <Link
            href={`/#media-buying-and-user-acquisition`}
            className="link link-hover"
          >
            Media Buying & User Acquisition
          </Link>
        </nav>

        <nav className="text-base">
          <h6 className="footer-title">Company</h6>
          <Link href={`/#about-us`} className="link link-hover">
            About us
          </Link>
          <Link href="/glossary" className="link link-hover">
            Glossary
          </Link>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Legal</h6>
          <Link href={`/cookie-policy`} className="link link-hover">
            Cookie Policy
          </Link>
          <Link href={`/terms`} className="link link-hover">
            Terms
          </Link>
          <Link href={`/privacy-policy`} className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
        <nav className="text-base">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <LinkedIn />
          </div>
        </nav>
      </div>

      <aside className="flex items-center justify-center container mx-auto pt-7 pb-4">
        <p>© All right reserved by United4Digital</p>
      </aside>
    </footer>
  );
}
