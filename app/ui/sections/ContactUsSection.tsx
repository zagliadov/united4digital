import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import Image from "next/image";
import Container from "@/app/ui/Container/Container";
import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import Form from "@/app/ui/sections/components/Form/Form";

export default function ContactUsSection() {
  return (
    <SectionWrapper id="contact-us" className="bg-base-100">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"Contact us"} />
        </Container>
        <Container>
          <div className="flex flex-col items-center laptop:items-start pt-28 laptop:pt-0 laptop:flex-row justify-between">
            <Form />
            <div className="pt-4 laptop:pt-0 tablet:ml-4">
              <Image
                alt="Rectangle"
                src="/rectangle.svg"
                width={734}
                height={572}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
