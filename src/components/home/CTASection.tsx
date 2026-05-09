import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

export default function CTASection() {
  const { lang } = useLanguage();
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.campus}
          alt=""
          className="w-full h-full

          -cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/95 to-[#002060]/80" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          {t("Begin Your Journey at Bululwe", "Anza Safari Yako Bululwe", lang)}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          {t(
            "Join a community dedicated to academic excellence, character development, and a brighter future for every student.",
            "Jiunge na jamii inayojitolea kwa ubora wa kitaaluma na mustakabali mzuri kwa kila mwanafunzi.",
            lang,
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            {t("Apply for Admission", "Omba Udahili", lang)}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 backdrop-blur-sm text-white font-medium rounded-xl border border-white/25 hover:bg-white/25 transition-all"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {t("Call Us", "Tupigie Simu", lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
