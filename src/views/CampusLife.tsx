import React from "react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import VirtualTour from "@/components/campus/VirtualTour";
import GallerySection from "@/components/campus/GallerySection";
import HouseSystem from "@/components/campus/HouseSystem";

export default function CampusLife() {
  const { lang } = useLanguage();
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.sports}
          alt="Campus Life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Campus Life", "Maisha ya Shule", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Life at Bululwe", "Maisha katika Bululwe", lang)}
            </h1>
          </div>
        </div>
      </section>

      <VirtualTour />
      <GallerySection />
      <HouseSystem />
    </div>
  );
}
