"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  HeartPulse,
  Scale,
  BookOpen,
  Briefcase,
  Monitor,
  Calculator,
  Zap,
  Dna,
  Globe,
  BookText,
  Languages,
  Church,
  Sprout,
  Sparkles,
  FlaskRound,
} from "lucide-react";
import { CAREER_SUBJECTS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Settings,
  HeartPulse,
  Scale,
  BookOpen,
  Briefcase,
  Monitor,
  Calculator,
  Zap,
  FlaskRound,
  Dna,
  Globe,
  BookText,
  Languages,
  Church,
  Sprout,
};

const CAREER_ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Engineering: Settings,
  Medicine: HeartPulse,
  Law: Scale,
  Education: BookOpen,
  Business: Briefcase,
  ICT: Monitor,
};

export default function Subjects() {
  const { lang } = useLanguage();
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const careerData = CAREER_SUBJECTS.find((c) => c.career === selectedCareer);

  return (
    <div>
      <section className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMyAxLjM0MyAzIDNzLTEuMzQzIDMtMyAzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Subject Selection", "Uchaguzi wa Masomo", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Subject Pathfinder", "Kiongozi cha Masomo", lang)}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={t("Career Guidance", "Mwongozo wa Kazi", lang)}
            title={t("Choose Your", "Chagua", lang)}
            highlight={t("Career Path", "Njia ya Kazi", lang)}
          />

          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t(
              "Select a career interest to discover the compulsory subjects and recommended elective combinations for your KCSE pathway.",
              "Chagua taaluma ili kuona masomo ya lazima na mchanganyiko wa masomo ya hiari kwa njia yako ya KCSE.",
              lang
            )}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {CAREER_SUBJECTS.map((c) => {
              const Icon = CAREER_ICON_MAP[c.career];
              const isActive = selectedCareer === c.career;
              return (
                <motion.button
                  key={c.career}
                  onClick={() => setSelectedCareer(isActive ? null : c.career)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-pressed={isActive}
                  aria-label={t(c.career, c.careerSw, lang)}
                  className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "glass ring-2 ring-primary shadow-lg shadow-primary/20"
                      : "glass hover:ring-1 hover:ring-primary/30 hover:shadow-md"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="career-glow"
                      className="absolute inset-0 rounded-2xl bg-primary/5"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? "gradient-primary text-white shadow-md" : "bg-muted text-muted-foreground"
                  }`}>
                    {Icon && <Icon className="w-7 h-7" aria-hidden="true" />}
                  </div>
                  <span className={`text-sm font-semibold text-center leading-tight ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}>
                    {t(c.career, c.careerSw, lang)}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {careerData && (
              <motion.div
                key={careerData.career}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-2xl p-6 md:p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {t("Compulsory Subjects", "Masomo ya Lazima", lang)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {careerData.compulsory.map((sub) => (
                      <span
                        key={sub}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold ring-1 ring-primary/20"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 md:p-8 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {t("Recommended Elective Clusters", "Vikundi Vilivyopendekezwa vya Masomo", lang)}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {careerData.electives.map((e, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-muted/40 border border-border"
                      >
                        <span className="text-sm text-foreground">
                          {t(e.label, e.labelSw, lang)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {t("All Subjects", "Masomo Yote", lang)}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {careerData.subjects.map((sub) => {
                      const Icon = ICON_MAP[sub.icon];
                      return (
                        <div
                          key={sub.name}
                          className={`relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                            sub.compulsory
                              ? "bg-primary/10 ring-1 ring-primary/30 shadow-sm shadow-primary/10"
                              : "bg-muted/30 hover:bg-muted/50"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            sub.compulsory ? "gradient-primary text-white" : "bg-background text-muted-foreground"
                          }`}>
                            {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                          </div>
                          <div className="min-w-0">
                            <p className={`text-sm font-medium truncate ${
                              sub.compulsory ? "text-primary" : "text-foreground"
                            }`}>
                              {sub.name}
                            </p>
                            {sub.compulsory && (
                              <p className="text-[10px] text-primary/60 uppercase tracking-wider font-semibold">
                                {t("Required", "Lazima", lang)}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!selectedCareer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
              </div>
              <p className="text-muted-foreground">
                {t(
                  "Select a career above to see subject recommendations.",
                  "Chagua taaluma hapo juu ili kuona mapendekezo ya masomo.",
                  lang
                )}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
