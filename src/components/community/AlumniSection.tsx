import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Target } from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

const stories = [
  {
    name: "Dr. Mary Wekesa",
    year: "Class of 2005",
    field: "Medicine",
    quote:
      "Bululwe gave me the foundation to pursue my dream of becoming a doctor.",
    quoteSw: "Bululwe ilinipa msingi wa kufuatia ndoto yangu ya kuwa daktari.",
  },
  {
    name: "Eng. Patrick Ouma",
    year: "Class of 2008",
    field: "Engineering",
    quote: "The discipline and work ethic I learned here shaped my career.",
    quoteSw:
      "Nidhamu na maadili ya kazi niliyojifunza hapa yaliunda kazi yangu.",
  },
  {
    name: "Prof. Sarah Amwata",
    year: "Class of 2002",
    field: "Education",
    quote: "My teachers at Bululwe inspired me to become an educator myself.",
    quoteSw:
      "Walimu wangu katika Bululwe walinishajiisha kuwa mwalimu mimi mwenyewe.",
  },
];

export default function AlumniSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={t("Alumni Network", "Mtandao wa Wahitimu", lang)}
          title={t("Success", "Hadithi za", lang)}
          highlight={t("Stories", "Mafanikio", lang)}
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 relative"
            >
              <Star className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4">
                <span className="text-white font-heading text-xl font-bold">
                  {story.name.split(" ").slice(-1)[0][0]}
                </span>
              </div>
              <p className="text-muted-foreground italic text-sm leading-relaxed mb-4">
                "{t(story.quote, story.quoteSw, lang)}"
              </p>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {story.name}
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  {story.field}
                </p>
                <p className="text-xs text-muted-foreground">{story.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-7 h-7 text-accent" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            {t("Support Bululwe", "Saidia Bululwe", lang)}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            {t(
              "Help us build better facilities, fund scholarships, and provide resources for our students' success.",
              "Tusaidie kujenga vifaa bora, kufadhili ufadhili, na kutoa rasilimali kwa mafanikio ya wanafunzi wetu.",
              lang,
            )}
          </p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                {t("Raised", "Imekusanywa", lang)}: KES 2.4M
              </span>
              <span className="font-semibold text-foreground">
                {t("Goal", "Lengo", lang)}: KES 5M
              </span>
            </div>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-secondary to-accent" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              48% {t("of goal reached", "ya lengo limefikiwa", lang)}
            </p>
          </div>

          <button className="px-8 py-3 gradient-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            {t("Donate Now", "Changia Sasa", lang)}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
