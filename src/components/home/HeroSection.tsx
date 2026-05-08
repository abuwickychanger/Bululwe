import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, ArrowRight } from "lucide-react";
import {
  HERO_IMAGES,
  IMAGES,
  SCHOOL_NAME,
  SCHOOL_MOTTO,
} from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[current]}
            alt="Bululwe Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/90 via-[#002060]/70 to-[#002060]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001030]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          {/* Crest */}
          <motion.img
            src={IMAGES.crest}
            alt="School Crest"
            className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-accent font-medium text-sm md:text-base tracking-widest uppercase mb-3">
              {t("Welcome to", "Karibu", lang)}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
              {SCHOOL_NAME}
            </h1>
            <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              {t(
                "Empowering minds, building character, and shaping Kenya's future leaders through excellence in education.",
                "Kuwezesha akili, kujenga tabia, na kuunda viongozi wa siku zijazo wa Kenya kupitia ubora katika elimu.",
                lang,
              )}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/30"
            >
              {t("Explore Programs", "Gundua Programu", lang)}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-medium rounded-xl border border-white/25 hover:bg-white/25 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              {t("Virtual Tour", "Ziara ya Mtandaoni", lang)}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-1.5 bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* School Motto badge */}
      <div className="absolute bottom-8 right-4 sm:right-8 hidden md:block">
        <div className="glass-dark rounded-xl px-5 py-3 text-white">
          <p className="text-xs text-white/60 uppercase tracking-wider">
            {t("Our Motto", "Kauli Mbiu Yetu", lang)}
          </p>
          <p className="font-heading text-lg font-semibold italic">
            "{t(SCHOOL_MOTTO, "Elimu ni Nguvu", lang)}"
          </p>
        </div>
      </div>
    </section>
  );
}
