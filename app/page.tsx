"use client";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import dynamic from "next/dynamic";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  {ssr: false}
)

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="1"
      perturbance="1"
      resolution="1500"
    >
      {() => (
        <div>
          <LandingSection />

          <FeaturedSection/>
          <AboutSection/>
          <ContactSection/>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
