import React from "react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import StaffDirectory from "@/components/community/StaffDirectory";
import AlumniSection from "@/components/community/AlumniSection";
import PortalPreview from "@/components/community/PortalPreview";

export default function Community() {
  const { lang } = useLanguage();
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.library}
          alt="Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Community", "Jamii", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Our Community", "Jamii Yetu", lang)}
            </h1>
          </div>
        </div>
      </section>

      <StaffDirectory />
      <AlumniSection />
      <PortalPreview />
    </div>
  );
}
