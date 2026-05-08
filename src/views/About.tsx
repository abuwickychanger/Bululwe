import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Shield,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { IMAGES, SCHOOL_NAME } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  {
    icon: Award,
    title: "Excellence",
    titleSw: "Ubora",
    desc: "Striving for the highest standards in every endeavor",
    descSw: "Kujitahidi viwango vya juu katika kila juhudi",
  },
  {
    icon: Shield,
    title: "Integrity",
    titleSw: "Uaminifu",
    desc: "Upholding honesty and moral principles at all times",
    descSw: "Kushikilia uaminifu na kanuni za maadili",
  },
  {
    icon: Users,
    title: "Community",
    titleSw: "Jamii",
    desc: "Fostering belonging and mutual respect among all",
    descSw: "Kukuza heshima na umoja kati ya wote",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    titleSw: "Uvumbuzi",
    desc: "Embracing creativity and forward-thinking approaches",
    descSw: "Kukubali ubunifu na mbinu za kisasa",
  },
  {
    icon: BookOpen,
    title: "Discipline",
    titleSw: "Nidhamu",
    desc: "Building self-control, consistency and responsibility",
    descSw: "Kujenga nidhamu binafsi na uwajibikaji",
  },
  {
    icon: Target,
    title: "Service",
    titleSw: "Huduma",
    desc: "Giving back to the community and nation",
    descSw: "Kurudisha kwa jamii na taifa",
  },
];

const leaders = [
  { name: "Mr. Joseph Wekesa", role: "Principal", roleSw: "Mkuu wa Shule" },
  { name: "Mrs. Grace Akinyi", role: "Deputy Principal", roleSw: "Naibu Mkuu" },
  {
    name: "Mrs. Esther Mukhwana",
    role: "Dean of Students",
    roleSw: "Mkuu wa Wanafunzi",
  },
];

export default function About() {
  const { lang } = useLanguage();
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.campus}
          alt="Bululwe school campus aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("About Us", "Kuhusu Sisi", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Our Story & Vision", "Hadithi na Maono Yetu", lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 px-4 sm:px-6" ref={historyRef}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={historyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              {t("Our History", "Historia Yetu", lang)}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
              {t("Decades of", "Miongo ya", lang)}{" "}
              <span className="text-gradient">
                {t("Educational Impact", "Athari ya Kielimu", lang)}
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Bululwe Mixed Secondary School was established to serve the educational needs of Central Marama and the broader Butere community. From humble beginnings, we have grown into a respected institution in Kakamega County.",
                  "Shule ya Sekondari ya Bululwe Mixed ilianzishwa kuhudumia mahitaji ya kielimu ya Central Marama na jamii pana ya Butere.",
                  lang,
                )}
              </p>
              <p>
                {t(
                  "Over the years, our school has produced graduates who have excelled in various fields — from medicine and engineering to education, law, and public service — contributing meaningfully to Kenya's development.",
                  "Kwa miaka mingi, shule yetu imetoa wahitimu ambao wamefanya vizuri katika nyanja mbalimbali — kutoka dawa na uhandisi hadi elimu, sheria, na huduma za umma.",
                  lang,
                )}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={historyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <img
              src={IMAGES.classroom}
              alt="Bululwe classroom with wooden desks and blackboard"
              className="w-full h-72 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 bg-muted/50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("Core Values", "Maadili Yetu", lang)}
            title={t("What We", "Tunachosimamia", lang)}
            highlight={t("Stand For", "", lang)}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {t(v.title, v.titleSw, lang)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(v.desc, v.descSw, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("Leadership", "Uongozi", lang)}
            title={t("Our", "Timu Yetu ya", lang)}
            highlight={t("Leadership Team", "Uongozi", lang)}
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center glass rounded-xl p-6"
              >
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-heading text-2xl font-bold">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(leader.role, leader.roleSw, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
