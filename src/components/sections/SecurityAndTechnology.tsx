import Image from "next/image";
import Link from "next/link";
import { MotionSection, MotionDiv, MotionH2 } from "../motion";
import Button from "../ui/Button";
import ProgressIndicator from "../ui/ProgressIndicator";
import SecuritySlides from "./SecuritySlides";
import { getTranslations } from "next-intl/server";

const SecurityAndTechnologySection = async () => {
  const t = await getTranslations("securityAndTechnology");

  return (
    <MotionSection
      id="security"
      className="relative w-full min-h-screen flex items-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-0 bottom-0 p-8 z-100">
        <ProgressIndicator activeIndex={6} />
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mockups/mock5.png"
          alt="Security Background"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] flex flex-col lg:flex-row gap-16 lg:gap-32 h-full">

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-between">
          <MotionH2
            className="mb-8 text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sicherheit &<br />Technologie
          </MotionH2>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl font-light uppercase tracking-wide mb-2">
              If this feels right,
            </p>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-12">
              BEGIN HERE.
            </h3>

            <Link href="/contact">
              <Button variant="blue" className="w-full">
                OPEN ACCOUNT
              </Button>
            </Link>
          </MotionDiv>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full lg:w-1/2">
          <SecuritySlides />
        </div>

      </div>
    </MotionSection>
  );
};

export default SecurityAndTechnologySection;