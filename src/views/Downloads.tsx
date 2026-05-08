"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Download, FileText, FolderOpen } from "lucide-react";
import { DOWNLOAD_FILES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";
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

export default function Downloads() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredFiles = useMemo(() => {
    return DOWNLOAD_FILES.filter((f) => {
      const matchesCategory = activeTab === "All" || f.category === activeTab;
      const name = lang === "sw" ? f.nameSw : f.name;
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, search, lang]);

  return (
    <div>
      <section className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMyAxLjM0MyAzIDNzLTEuMzQzIDMtMyAzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Document Repository", "Hifadi ya Nyaraka", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Downloads Center", "Kituo cha Vipakuliwa", lang)}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow={t("Resources", "Rasilimali", lang)}
            title={t("Download", "Pakua", lang)}
            highlight={t("Documents", "Nyaraka", lang)}
          />

          <div className="relative mb-8 max-w-md mx-auto">
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
                    : t(cat, cat === "Admission Forms" ? "Fomu za Udahili" : cat === "Academic Timetables" ? "Ratiba za Masomo" : "Kazi za Likizo", lang)}
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
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
                        {filteredFiles.map((file, i) => (
                          <TableRow key={`${file.name}-${i}`}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                  <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground truncate max-w-[240px] sm:max-w-sm">
                                    {lang === "sw" ? file.nameSw : file.name}
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
                              {file.size}
                            </TableCell>
                            <TableCell className="text-right">
                              <a
                                href={file.url}
                                download
                                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                aria-label={t(
                                  `Download ${file.name}`,
                                  `Pakua ${file.nameSw}`,
                                  lang
                                )}
                              >
                                <Download className="w-4 h-4" aria-hidden="true" />
                              </a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
