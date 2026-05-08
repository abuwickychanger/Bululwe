import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Atom, BookText, ArrowRight } from "lucide-react";
import { ACADEMIC_PROGRAMS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

export default function ProgramsPreview() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-muted/50 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            {t("Academic Programs", "Programu za Kitaaluma", lang)}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("Pathways to", "Njia za", lang)}{" "}
            <span className="text-gradient">
              {t("Success", "Mafanikio", lang)}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* STEM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  STEM & Sciences
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t("Pure & Applied Sciences", "Sayansi Safi na Tumizi", lang)}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {ACADEMIC_PROGRAMS.stem.map((p) => (
                <div
                  key={p.name}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {p.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Humanities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <BookText className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {t(
                    "Humanities & Social Sciences",
                    "Sanaa na Sayansi ya Jamii",
                    lang,
                  )}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t(
                    "Languages, History & Commerce",
                    "Lugha, Historia & Biashara",
                    lang,
                  )}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {ACADEMIC_PROGRAMS.humanities.map((p) => (
                <div
                  key={p.name}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {p.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-medium rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            {t("View All Programs", "Tazama Programu Zote", lang)}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
