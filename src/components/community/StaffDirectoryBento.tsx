"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  User,
  Quote,
  X,
  Briefcase,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

interface StaffItem {
  id: string;
  name: string;
  roleEn: string;
  roleSw: string;
  department: string;
  bioEn: string | null;
  bioSw: string | null;
  imageUrl: string | null;
  email: string | null;
  hours: string | null;
  sortOrder: number;
}

const DEPARTMENTS = [
  "All",
  "Administration",
  "Sciences",
  "Mathematics",
  "Languages",
  "Humanities",
  "Technical",
  "Creative Arts",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StaffDirectoryBento({ staff }: { staff: StaffItem[] }) {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? staff
      : staff.filter((s) => s.department === filter);

  const [selectedStaff, setSelectedStaff] = useState<StaffItem | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={t("Our Team", "Timu Yetu", lang)}
          title={t("Staff", "Daftari ya", lang)}
          highlight={t("Directory", "Wafanyakazi", lang)}
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {DEPARTMENTS.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              aria-pressed={filter === d}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === d
                  ? "gradient-primary text-white shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/5 border border-border"
              }`}
            >
              {d === "All"
                ? t("All", "Zote", lang)
                : d}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((staffMember, i) => {
            const isPrincipal = staffMember.sortOrder === 0;
            return (
              <motion.div
                key={staffMember.id}
                variants={itemVariants}
                className={`glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  isPrincipal ? "sm:col-span-2 lg:col-span-1 row-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shrink-0 shadow-md">
                    <User className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-lg font-bold text-foreground truncate">
                      {staffMember.name}
                    </h4>
                    <p className="text-sm text-primary font-medium truncate">
                      {t(staffMember.roleEn, staffMember.roleSw, lang)}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5">
                  <Briefcase className="w-3 h-3" aria-hidden="true" />
                  {staffMember.department}
                </p>

                <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      {staffMember.hours ?? t("Hours not listed", "Saa hazijaorodheshwa", lang)}
                    </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedStaff(staffMember)}
                        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-primary hover:bg-primary/5 py-2.5 rounded-lg transition-colors border border-primary/20 mt-2"
                        aria-label={t(
                          `View ${staffMember.name}'s profile`,
                          `Tazama wasifu wa ${staffMember.name}`,
                          lang
                        )}
                      >
                        <Quote className="w-3.5 h-3.5" aria-hidden="true" />
                        {t("View Profile", "Tazama Wasifu", lang)}
                      </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-lg glass-db">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shrink-0 shadow-md">
                            <User className="w-7 h-7 text-white" aria-hidden="true" />
                          </div>
                          <div>
                            <DialogTitle className="font-heading text-xl">
                              {staffMember.name}
                            </DialogTitle>
                            <p className="text-sm text-primary font-medium">
                              {t(staffMember.roleEn, staffMember.roleSw, lang)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {staffMember.department}
                            </p>
                          </div>
                        </div>
                      </DialogHeader>

                      <DialogDescription asChild>
                        <div className="space-y-4">
                          {(staffMember.bioEn || staffMember.bioSw) && (
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {t(staffMember.bioEn ?? "", staffMember.bioSw ?? "", lang)}
                            </p>
                          )}

                          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            {staffMember.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" aria-hidden="true" />
                                <a
                                  href={`mailto:${staffMember.email}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {staffMember.email}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" aria-hidden="true" />
                              {staffMember.hours ?? t("Hours not listed", "Saa hazijaorodheshwa", lang)}
                            </div>
                          </div>
                        </div>
                      </DialogDescription>

                      <DialogClose asChild>
                        <button
                          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label={t("Close", "Funga", lang)}
                        >
                          <X className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
