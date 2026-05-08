"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import { POSTS, CATEGORIES } from "@/lib/news";
import PostCard from "@/components/news/PostCard";

export default function NewsPage() {
  const { lang } = useLanguage();
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? POSTS
      : POSTS.filter((p) => p.category === category);

  return (
    <div>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.library}
          alt="News"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/90 via-[#002060]/70 to-[#002060]/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Stay Informed", "Endelea Kufahamishwa", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("News & Updates", "Habari na Masasisho", lang)}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  category === cat.value
                    ? "gradient-primary text-white shadow-md"
                    : "bg-card text-muted-foreground hover:bg-primary/5 border border-border"
                }`}
              >
                {t(cat.label, cat.labelSw, lang)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-20"
              >
                {t("No posts found.", "Hakuna machapisho yaliyopatikana.", lang)}
              </motion.p>
            ) : (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
