import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

const tourSpots = [
  {
    id: "classroom",
    name: "Classrooms",
    nameSw: "Madarasa",
    image: IMAGES.classroom,
    desc: "Modern, well-ventilated classrooms equipped for optimal learning environments.",
    descSw:
      "Madarasa ya kisasa, yenye hewa safi yaliyoandaliwa kwa mazingira bora ya kujifunza.",
    hotspots: [
      { x: 25, y: 40, label: "Interactive Whiteboard" },
      { x: 70, y: 55, label: "Student Desks" },
    ],
  },
  {
    id: "lab",
    name: "Science Labs",
    nameSw: "Maabara ya Sayansi",
    image: IMAGES.scienceLab,
    desc: "Fully equipped chemistry, biology, and physics laboratories for hands-on experiments.",
    descSw:
      "Maabara kamili za kemia, biolojia, na fizikia kwa majaribio ya vitendo.",
    hotspots: [
      { x: 30, y: 50, label: "Lab Equipment" },
      { x: 65, y: 35, label: "Safety Station" },
    ],
  },
  {
    id: "library",
    name: "Library",
    nameSw: "Maktaba",
    image: IMAGES.library,
    desc: "A comprehensive library with thousands of books, research materials, and quiet study areas.",
    descSw:
      "Maktaba kamili yenye maelfu ya vitabu, nyenzo za utafiti, na maeneo ya kusoma kwa utulivu.",
    hotspots: [
      { x: 40, y: 45, label: "Reading Area" },
      { x: 75, y: 30, label: "Book Collections" },
    ],
  },
  {
    id: "sports",
    name: "Sports Grounds",
    nameSw: "Viwanja vya Michezo",
    image: IMAGES.sports,
    desc: "Expansive sports fields for football, athletics, volleyball, and netball.",
    descSw:
      "Viwanja vipana vya michezo kwa mpira wa miguu, riadha, volleyball, na netball.",
    hotspots: [
      { x: 50, y: 60, label: "Football Pitch" },
      { x: 20, y: 40, label: "Athletics Track" },
    ],
  },
];

export default function VirtualTour() {
  const { lang } = useLanguage();
  const [activeSpot, setActiveSpot] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  const spot = tourSpots[activeSpot];
  const prev = () =>
    setActiveSpot((i) => (i - 1 + tourSpots.length) % tourSpots.length);
  const next = () => setActiveSpot((i) => (i + 1) % tourSpots.length);

  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={t("Virtual Campus Tour", "Ziara ya Mtandaoni", lang)}
          title={t("Explore Our", "Gundua", lang)}
          highlight={t("Facilities", "Vifaa Vyetu", lang)}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
            {tourSpots.map((ts, i) => (
              <button
                key={ts.id}
                onClick={() => setActiveSpot(i)}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  i === activeSpot
                    ? "gradient-primary text-white shadow-md"
                    : "glass hover:bg-primary/5"
                }`}
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="font-medium text-sm">
                  {t(ts.name, ts.nameSw, lang)}
                </span>
              </button>
            ))}
          </div>

          {/* Tour View */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={spot.id}
                  src={spot.image}
                  alt={spot.name}
                  className="w-full aspect-video object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Hotspots */}
              {spot.hotspots.map((hp, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ left: `${hp.x}%`, top: `${hp.y}%` }}
                  onMouseEnter={() => setHoveredHotspot(i)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/80 border-2 border-white flex items-center justify-center cursor-pointer animate-pulse">
                    <Eye className="w-3 h-3 text-white" />
                  </div>
                  <AnimatePresence>
                    {hoveredHotspot === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass rounded-lg px-3 py-1.5 whitespace-nowrap text-xs font-medium shadow-lg"
                      >
                        {hp.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Nav Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="font-heading text-xl font-bold text-white">
                  {t(spot.name, spot.nameSw, lang)}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {t(spot.desc, spot.descSw, lang)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
