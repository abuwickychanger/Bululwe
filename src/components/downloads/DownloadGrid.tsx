"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, FolderOpen } from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  "All",
  "Admission Forms",
  "Academic Timetables",
  "Holiday Assignments",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

interface DownloadItem {
  id: string;
  nameEn: string;
  nameSw: string;
  category: string;
  fileUrl: string;
  fileSize: string;
}

export default function DownloadGrid({ downloads }: { downloads: DownloadItem[] }) {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredFiles = useMemo(() => {
    return downloads.filter((f) => {
      const matchesCategory = activeTab === "All" || f.category === activeTab;
      const name = lang === "sw" ? f.nameSw : f.nameEn;
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, search, lang, downloads]);

  return (
    <div className="relative mb-8 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("Search documents...", "Tafuta nyaraka...", lang)}
            aria-label={t("Search documents", "Tafuta nyaraka", lang)}
            className="w-full pl-10 h-11 rounded-xl"
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full flex-wrap justify-center mb-8 h-auto p-1">
          {CATEGORIES.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="px-5 py-2 text-sm rounded-lg data-active:shadow-sm"
            >
              {cat === "All"
                ? t("All", "Zote", lang)
                : t(cat,
                    cat === "Admission Forms"
                      ? "Fomu za Udahili"
                      : cat === "Academic Timetables"
                      ? "Ratiba za Masomo"
                      : "Kazi za Likizo",
                    lang)}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((cat) => (
          <TabsContent key={cat} value={cat}>
            {filteredFiles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <FolderOpen className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <p className="text-muted-foreground">
                  {t(
                    "No documents found matching your search.",
                    "Hakuna nyaraka zinazolingana na utaftaji wako.",
                    lang
                  )}
                </p>
              </motion.div>
            ) : (
              <>
                {/* Desktop: Table */}
                <div className="hidden md:block">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="glass rounded-2xl overflow-hidden"
                  >
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-2/3">
                            {t("File Name", "Jina la Faili", lang)}
                          </TableHead>
                          <TableHead>
                            {t("Size", "Ukubwa", lang)}
                          </TableHead>
                          <TableHead className="text-right">
                            {t("Download", "Pakua", lang)}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredFiles.map((file) => (
                          <motion.tr
                            key={file.id}
                            variants={itemVariants}
                            className="border-b transition-colors hover:bg-muted/50"
                          >
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                  <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground truncate max-w-[240px] sm:max-w-sm">
                                    {lang === "sw" ? file.nameSw : file.nameEn}
                                  </p>
                                  <Badge variant="outline" className="mt-0.5 text-[10px] h-4 px-1.5">
                                    {file.category === "Admission Forms"
                                      ? t("Admission", "Udahili", lang)
                                      : file.category === "Academic Timetables"
                                      ? t("Timetable", "Ratiba", lang)
                                      : t("Assignment", "Kazi", lang)}
                                  </Badge>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {file.fileSize}
                            </TableCell>
                            <TableCell className="text-right">
                              <a
                                href={file.fileUrl}
                                download
                                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                aria-label={t(
                                  `Download ${file.nameEn}`,
                                  `Pakua ${file.nameSw}`,
                                  lang
                                )}
                              >
                                <Download className="w-4 h-4" aria-hidden="true" />
                              </a>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </motion.div>
                </div>

                {/* Mobile: Cards */}
                <div className="block md:hidden space-y-3">
                  {filteredFiles.map((file, i) => (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="glass rounded-xl p-4 space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground truncate">
                            {lang === "sw" ? file.nameSw : file.nameEn}
                          </p>
                          <Badge variant="outline" className="mt-1 text-[10px] h-4 px-1.5">
                            {file.category === "Admission Forms"
                              ? t("Admission", "Udahili", lang)
                              : file.category === "Academic Timetables"
                              ? t("Timetable", "Ratiba", lang)
                              : t("Assignment", "Kazi", lang)}
                          </Badge>
                        </div>
                        <a
                          href={file.fileUrl}
                          download
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors shrink-0"
                          aria-label={t(
                            `Download ${file.nameEn}`,
                            `Pakua ${file.nameSw}`,
                            lang
                          )}
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-xs text-muted-foreground">
                          {t("Size", "Ukubwa", lang)}: {file.fileSize}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
