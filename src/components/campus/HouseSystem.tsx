import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import { HOUSES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

export default function HouseSystem() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const maxPoints = Math.max(...HOUSES.map((h) => h.points));

  return (
    <section className="py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={t("House System", "Mfumo wa Nyumba", lang)}
          title={t("Inter-House", "Ushindani wa", lang)}
          highlight={t("Competition", "Nyumba", lang)}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {HOUSES.sort((a, b) => b.points - a.points).map((house, i) => (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                style={{
                  background: house.color,
                  transform: "translate(30%, -30%)",
                }}
              />

              {i === 0 && (
                <div className="absolute top-3 right-3">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: house.color + "20" }}
                >
                  <Star className="w-5 h-5" style={{ color: house.color }} />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {t(house.name, house.nameSw, lang)}
                  </h4>
                  <p className="text-xs text-muted-foreground italic">
                    {house.motto}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">
                    {t("Points", "Pointi", lang)}
                  </span>
                  <span className="font-bold text-foreground">
                    {house.points}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: house.color }}
                    initial={{ width: 0 }}
                    animate={
                      inView
                        ? { width: `${(house.points / maxPoints) * 100}%` }
                        : {}
                    }
                    transition={{ duration: 1, delay: i * 0.15 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
