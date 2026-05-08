import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, User } from "lucide-react";
import { STAFF_DIRECTORY, DEPARTMENTS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

export default function StaffDirectory() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState("All");
  const depts = ["All", ...DEPARTMENTS];
  const filtered =
    filter === "All"
      ? STAFF_DIRECTORY
      : STAFF_DIRECTORY.filter((s) => s.dept === filter);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={t("Our Team", "Timu Yetu", lang)}
          title={t("Staff", "Daftari ya", lang)}
          highlight={t("Directory", "Wafanyakazi", lang)}
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {depts.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === d
                  ? "gradient-primary text-white shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/5 border border-border"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((staff, i) => (
            <motion.div
              key={staff.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 mx-auto">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-heading text-lg font-bold text-foreground">
                  {staff.name}
                </h4>
                <p className="text-sm text-blue-600 font-medium">
                  {staff.role}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {staff.dept}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {staff.hours}
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-xs font-medium text-primary hover:bg-primary/5 py-2 rounded-lg transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {t("Send Message", "Tuma Ujumbe", lang)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
