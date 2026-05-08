import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), []);
  const togglePause = useCallback(() => setPaused((p) => !p), []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-white px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            {t("Testimonials", "Shuhuda", lang)}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("What Our", "Wanachosema", lang)}{" "}
            <span className="text-gradient">
              {t("Community Says", "Wanajamii Wetu", lang)}
            </span>
          </h2>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-2xl p-8 md:p-10 relative"
            >
              <Quote className="absolute top-4 left-4 w-10 h-10 text-primary/10" aria-hidden="true" />
              <div className="relative">
                <p className="text-foreground/85 text-base md:text-lg leading-relaxed italic mb-6">
                  &ldquo;{t(TESTIMONIALS[current].quote, TESTIMONIALS[current].quoteSw, lang)}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {TESTIMONIALS[current].name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {TESTIMONIALS[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-border hover:bg-primary/5 hover:border-primary/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-foreground/60" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="flex items-center justify-center min-w-[44px] min-h-[44px]"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`block rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-6 h-2"
                      : "bg-foreground/20 hover:bg-foreground/40 w-2 h-2"
                  }`} />
                </button>
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-border hover:bg-primary/5 hover:border-primary/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-foreground/60" aria-hidden="true" />
            </button>
            <button
              onClick={togglePause}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border border-border hover:bg-primary/5 hover:border-primary/30 transition-colors"
            >
              {paused ? <Play className="w-4 h-4 text-foreground/60" aria-hidden="true" /> : <Pause className="w-4 h-4 text-foreground/60" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
