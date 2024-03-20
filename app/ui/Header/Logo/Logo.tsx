import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={60}
        height={46}
        alt="Logo United for Digital"
      />
    </Link>
  );
}
