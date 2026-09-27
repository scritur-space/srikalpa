import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhySriKalpa } from "@/components/sections/WhySriKalpa";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CustomFurnitureCTA } from "@/components/sections/CustomFurnitureCTA";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStatement />
      <WhatWeOffer />
      <FeaturedProducts />
      <WhySriKalpa />
      <ProjectsShowcase />
      <StatisticsSection />
      <TestimonialsSection />
      <CustomFurnitureCTA />
      <EnquiryForm />
      <ContactSection />
    </>
  );
}
