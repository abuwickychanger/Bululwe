import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Bell } from 'lucide-react';
import { IMAGES, NAV_LINKS, SCHOOL_NAME_SHORT, ANNOUNCEMENTS } from '@/lib/constants';
import { useLanguage, t } from '@/lib/LanguageContext';

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnounceIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#002060] via-[#002060] to-[#001030] text-white text-xs md:text-sm text-center py-1.5 px-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={announceIdx}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            <Bell className="w-3.5 h-3.5 shrink-0" />
            {t(ANNOUNCEMENTS[announceIdx].text, ANNOUNCEMENTS[announceIdx].textSw, lang)}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={IMAGES.crest} alt="School Crest" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="hidden sm:block">
              <p className={`font-heading text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-primary'
              }`}>
                {SCHOOL_NAME_SHORT}
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
                {t("Secondary School", "Shule ya Sekondari", lang)}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 ${
                    pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {t(link.label, link.labelSw, lang)}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 glass rounded-xl p-2 shadow-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all duration-200"
                        >
                          {t(child.label, child.labelSw, lang)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border hover:bg-primary/5 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'SW' : 'EN'}
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20"
            >
              {t("Enroll Now", "Jisajili Sasa", lang)}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="block px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/5 hover:text-primary font-medium transition-all"
                  >
                    {t(link.label, link.labelSw, lang)}
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-all"
                        >
                          {t(child.label, child.labelSw, lang)}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 gradient-primary text-white font-medium rounded-lg"
                >
                  {t("Enroll Now", "Jisajili Sasa", lang)}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
