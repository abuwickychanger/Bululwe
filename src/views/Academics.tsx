import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Atom,
  BookText,
  Search,
  Download,
  Calendar,
  ArrowRight,
  Filter,
  ChevronDown,
} from "lucide-react";
import {
  ACADEMIC_PROGRAMS,
  CALENDAR_EVENTS,
  FAQ_DATA,
  IMAGES,
} from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

const categoryColors: Record<string, string> = {
  academic: "bg-secondary text-secondary-foreground",
  exams: "bg-destructive/10 text-destructive",
  sports: "bg-success/10 text-success",
  holiday: "bg-accent/20 text-accent-foreground",
};

const admissionSteps = [
  {
    step: 1,
    title: "Obtain KCPE Results",
    titleSw: "Pata Matokeo ya KCPE",
    desc: "Ensure minimum 250 marks",
  },
  {
    step: 2,
    title: "Submit Application",
    titleSw: "Wasilisha Maombi",
    desc: "Fill out the admission form",
  },
  {
    step: 3,
    title: "Document Verification",
    titleSw: "Uthibitishaji wa Hati",
    desc: "Submit birth certificate & KCPE slip",
  },
  {
    step: 4,
    title: "Admission Letter",
    titleSw: "Barua ya Udahili",
    desc: "Receive confirmation & fee structure",
  },
  {
    step: 5,
    title: "Report to School",
    titleSw: "Ripoti Shuleni",
    desc: "Join on the designated reporting date",
  },
];

export default function Academics() {
  const { lang } = useLanguage();
  const [calFilter, setCalFilter] = useState("all");
  const [faqSearch, setFaqSearch] = useState("");

  const filteredEvents = CALENDAR_EVENTS.filter(
    (e) => calFilter === "all" || e.category === calFilter,
  );
  const filteredFaqs = FAQ_DATA.filter((f) => {
    const text = lang === "sw" ? f.qSw : f.q;
    return text.toLowerCase().includes(faqSearch.toLowerCase());
  });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.scienceLab}
          alt="Science Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Academics", "Masomo", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Academic Excellence", "Ubora wa Kitaaluma", lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("Our Programs", "Programu Zetu", lang)}
            title={t("Academic", "Njia za", lang)}
            highlight={t("Pathways", "Kitaaluma", lang)}
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* STEM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  STEM & Sciences
                </h3>
              </div>
              <div className="space-y-3">
                {ACADEMIC_PROGRAMS.stem.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{p.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Humanities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <BookText className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {t("Humanities", "Sanaa", lang)}
                </h3>
              </div>
              <div className="space-y-3">
                {ACADEMIC_PROGRAMS.humanities.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-accent/5 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{p.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" className="py-20 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={t("Academic Calendar", "Kalenda ya Masomo", lang)}
            title={t("Important", "Tarehe", lang)}
            highlight={t("Dates", "Muhimu", lang)}
          />
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["all", "academic", "exams", "sports", "holiday"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCalFilter(cat)}
                aria-pressed={calFilter === cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  calFilter === cat
                    ? "gradient-primary text-white shadow-md"
                    : "bg-white text-muted-foreground hover:bg-primary/5 border border-border"
                }`}
              >
                {cat === "all"
                  ? t("All", "Zote", lang)
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={`${event.date}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-lg gradient-primary flex flex-col items-center justify-center text-white shrink-0">
                  <span className="text-xs font-medium">
                    {format(new Date(event.date), "MMM")}
                  </span>
                  <span className="text-lg font-bold leading-none">
                    {format(new Date(event.date), "dd")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {t(event.title, event.titleSw, lang)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                  </p>
                </div>
                <Badge className={categoryColors[event.category]}>
                  {event.category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={t("Admissions", "Udahili", lang)}
            title={t("How to", "Jinsi ya", lang)}
            highlight={t("Join Us", "Kujiunga", lang)}
          />

          {/* Timeline */}
          <div className="relative mb-16">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-8">
              {admissionSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  <div
                    className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}
                  >
                    <div className="glass rounded-xl p-5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full gradient-primary text-white text-sm font-bold mb-2">
                        {step.step}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-foreground">
                        {t(step.title, step.titleSw, lang)}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-white hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Prospectus */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 glass rounded-xl px-8 py-5">
              <Download className="w-6 h-6 text-primary" aria-hidden="true" />
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  {t("School Prospectus", "Muhtasari wa Shule", lang)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(
                    "Download our detailed information booklet",
                    "Pakua kijitabu chetu cha habari",
                    lang,
                  )}
                </p>
              </div>
              <button className="ml-4 px-4 py-2 gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                PDF
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-6">
              {t(
                "Frequently Asked Questions",
                "Maswali Yanayoulizwa Mara kwa Mara",
                lang,
              )}
            </h3>
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder={t(
                    "Search questions...",
                    "Tafuta maswali...",
                    lang,
                  )}
                  aria-label={t("Search questions", "Tafuta maswali", lang)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="max-w-2xl mx-auto space-y-2"
            >
              {filteredFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass rounded-xl px-5 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {t(faq.q, faq.qSw, lang)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {t(faq.a, faq.aSw, lang)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
