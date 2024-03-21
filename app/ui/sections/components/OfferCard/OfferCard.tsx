import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  text: string;
  className: string;
}
export default function OfferCard({ src, alt, text, className }: IProps) {
  return (
    <div className={`bg-white py-8 px-10 rounded-lg ${className}`}>
      <Image src={src} width={56} height={50} alt={alt} />
      <p className="pt-10">{text}</p>
    </div>
  );
}
