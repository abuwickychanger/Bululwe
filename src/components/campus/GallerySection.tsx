import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

const galleryItems = [
  { src: IMAGES.classroom, category: "academics", title: "Classroom Learning" },
  {
    src: IMAGES.scienceLab,
    category: "academics",
    title: "Science Laboratory",
  },
  { src: IMAGES.library, category: "academics", title: "School Library" },
  { src: IMAGES.sports, category: "sports", title: "Football Match" },
  { src: IMAGES.campus, category: "culture", title: "School Grounds" },
  { src: IMAGES.classroom, category: "clubs", title: "Study Groups" },
];

const categories = ["all", "academics", "sports", "clubs", "culture"];

export default function GallerySection() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<typeof galleryItems[number] | null>(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={t("Student Life Gallery", "Picha za Maisha ya Shule", lang)}
          title={t("Moments That", "Wakati", lang)}
          highlight={t("Inspire", "Unaovutia", lang)}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                filter === cat
                  ? "gradient-primary text-white shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/5 border border-border"
              }`}
            >
              {cat === "all" ? t("All", "Zote", lang) : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${item.category}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(item)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(item); } }}
                role="button"
                tabIndex={0}
                aria-label={`${t("View", "Tazama", lang)} ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-xs capitalize">
                    {item.category}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
              tabIndex={-1}
            >
              <button
                autoFocus
                onClick={() => setLightbox(null)}
                onKeyDown={(e) => { if (e.key === 'Escape') setLightbox(null); }}
                aria-label={t("Close lightbox", "Funga", lang)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-8 text-center text-white">
                <p className="font-heading text-xl font-bold">
                  {lightbox.title}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
