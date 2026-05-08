import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, Heart, Target } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

const pillars = [
  {
    icon: Award,
    title: "Academic Excellence",
    titleSw: "Ubora wa Kitaaluma",
    desc: "Rigorous curriculum aligned with national standards",
    descSw: "Mtaala mkali unaofuata viwango vya kitaifa",
  },
  {
    icon: Heart,
    title: "Character Building",
    titleSw: "Kujenga Tabia",
    desc: "Nurturing responsible, ethical future leaders",
    descSw: "Kukuza viongozi wa siku zijazo wenye maadili",
  },
  {
    icon: Target,
    title: "Holistic Growth",
    titleSw: "Ukuaji Kamili",
    desc: "Sports, arts, and co-curricular development",
    descSw: "Michezo, sanaa, na maendeleo ya ziada",
  },
];

export default function AboutPreview() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={IMAGES.classroom}
                alt="Students in classroom"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-xl px-5 py-3 shadow-xl">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {t("Established", "Imeanzishwa", lang)}
              </p>
              <p className="font-heading text-2xl font-bold text-primary">
                Since 2014
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              {t("About Our School", "Kuhusu Shule Yetu", lang)}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              {t("Shaping Tomorrow's", "Kuunda Viongozi wa", lang)}{" "}
              <span className="text-gradient">
                {t("Leaders", "Kesho", lang)}
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(
                "Bululwe Mixed Secondary School is a co-educational sub-county secondary school located in Central Marama, Butere Constituency, Kakamega County. We are committed to providing quality education that empowers our students to excel academically and develop strong moral values.",
                "Shule ya Sekondari ya Bululwe Mixed ni shule ya kata ya sekondari inayochanganya wanafunzi wa jinsia zote iliyoko Central Marama, Butere, Kaunti ya Kakamega. Tumejitolea kutoa elimu bora.",
                lang,
              )}
            </p>

            <div className="space-y-4 mb-8">
              {pillars.map((pillar, i) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <pillar.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {t(pillar.title, pillar.titleSw, lang)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(pillar.desc, pillar.descSw, lang)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              {t("Learn More About Us", "Jifunze Zaidi Kuhusu Sisi", lang)}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
