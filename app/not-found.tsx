import Link from "next/link";
import Image from "next/image";
import Button from "@/app/ui/Button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-around container mx-auto tablet:px-4 h-screen bg-base-100 pt-8 pb-16">
      <div className="flex justify-center items-center tablet:justify-between">
        <Image
          src="/logo-full.svg"
          width={294}
          height={78}
          alt="Logo of United4Digital"
        />
        <div className="hidden tablet:flex">
          <Button label={"Contact us"} />
        </div>
      </div>
      <div className="flex flex-col h-full justify-end items-center px-2 tablet:justify-center">
        <Image
          src="/not-found.svg"
          width={787}
          height={505}
          alt="Not found page image"
        />
        <div className="flex flex-col items-center text-center pt-4 tablet:pt-16">
          <p className="text-2xl tablet:text-3xl font-normal">
            Oops! The page you&apos;re looking for couldn&apos;t be found.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-2xl tablet:text-3xl font-bold text-secondary"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
