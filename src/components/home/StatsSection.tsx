import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { STATS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

const icons = [Users, BookOpen, GraduationCap, Trophy];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span aria-live="polite" aria-atomic="true">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative -mt-16 z-10 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary mb-3">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(stat.label, stat.labelSw, lang)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
