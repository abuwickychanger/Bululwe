"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone } from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";

interface AnnouncementItem {
  id: string;
  titleEn: string;
  titleSw: string;
  contentEn: string | null;
  contentSw: string | null;
}

export default function NotificationBar({
  announcements,
}: {
  announcements: AnnouncementItem[];
}) {
  const { lang } = useLanguage();
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = announcements.filter((a) => !dismissed.has(a.id));

  if (visible.length === 0) return null;

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {visible.map((a) => (
          <motion.div
            key={a.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background/70 dark:bg-background/10 backdrop-blur-md border border-white/20 rounded-none px-4 py-3"
          >
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <Megaphone className="w-4 h-4 text-destructive" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {t(a.titleEn, a.titleSw, lang)}
                </p>
                {(a.contentEn || a.contentSw) && (
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {t(a.contentEn ?? "", a.contentSw ?? "", lang)}
                  </p>
                )}
              </div>
              <button
                onClick={() => setDismissed((prev) => new Set(prev).add(a.id))}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted transition-colors shrink-0"
                aria-label={t("Dismiss announcement", "Futa tangazo", lang)}
              >
                <X className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
