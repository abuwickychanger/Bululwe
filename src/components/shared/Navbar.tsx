import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, ChevronRight, Globe, Bell, Pause, Play,
  House, Info, GraduationCap, MapPin, Newspaper, Users, Phone,
} from 'lucide-react';
import { IMAGES, NAV_LINKS, SCHOOL_NAME_SHORT, ANNOUNCEMENTS } from '@/lib/constants';
import { useLanguage, t } from '@/lib/LanguageContext';
import type { Lang } from '@/lib/LanguageContext';

const NAV_ICONS: Record<string, React.ReactNode> = {
  Home: <House className="w-5 h-5" />,
  About: <Info className="w-5 h-5" />,
  Academics: <GraduationCap className="w-5 h-5" />,
  "Campus Life": <MapPin className="w-5 h-5" />,
  News: <Newspaper className="w-5 h-5" />,
  Community: <Users className="w-5 h-5" />,
  Contact: <Phone className="w-5 h-5" />,
};

function MobileNavLink({
  link,
  pathname,
  lang,
}: {
  link: (typeof NAV_LINKS)[number];
  pathname: string;
  lang: Lang;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!link.children;
  const isActive = pathname === link.path;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div className="flex items-center">
        <Link
          href={link.path}
          className={`flex items-center gap-3 flex-1 py-3 text-sm font-medium transition-colors ${
            isActive
              ? 'text-primary'
              : 'text-gray-700 hover:text-primary'
          }`}
        >
          {NAV_ICONS[link.label] && (
            <span className="shrink-0" aria-hidden="true">{NAV_ICONS[link.label]}</span>
          )}
          {t(link.label, link.labelSw, lang)}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center w-11 h-11 text-gray-400 hover:text-primary transition-colors"
            aria-label={expanded ? "Collapse submenu" : "Expand submenu"}
            aria-expanded={expanded}
          >
            <ChevronRight
              aria-hidden="true"
              className={`w-5 h-5 transition-transform duration-200 ${
                expanded ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}
      </div>
      {hasChildren && (
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-8 pb-3 space-y-1">
                {link.children!.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    className={`block py-1.5 text-sm transition-colors ${
                      pathname === child.path
                        ? 'text-primary font-medium'
                        : 'text-gray-500 hover:text-primary'
                    }`}
                  >
                    {t(child.label, child.labelSw, lang)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const [announcePaused, setAnnouncePaused] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (announcePaused) return;
    const timer = setInterval(() => {
      setAnnounceIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcePaused]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Focus trap for mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (first) first.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    drawer.addEventListener('keydown', handleKeyDown);
    return () => drawer.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const toggleAnnouncePause = useCallback(() => {
    setAnnouncePaused((p) => !p);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#002060] via-[#002060] to-[#001030] text-white text-xs md:text-sm text-center py-1.5 px-4 overflow-hidden">
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={announceIdx}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <Bell className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {t(ANNOUNCEMENTS[announceIdx].text, ANNOUNCEMENTS[announceIdx].textSw, lang)}
            </motion.p>
          </AnimatePresence>
          <button
            onClick={toggleAnnouncePause}
            aria-label={announcePaused ? "Resume announcements" : "Pause announcements"}
            className="shrink-0 p-1.5 rounded hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white/70"
          >
            {announcePaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
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
                onFocus={() => setHoveredMenu(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setHoveredMenu(null);
                  }
                }}
              >
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 focus-visible:bg-primary/5 ${
                    pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {t(link.label, link.labelSw, lang)}
                  {link.children && <ChevronDown aria-hidden="true" className="w-3.5 h-3.5" />}
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
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          role="menuitem"
                          className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all duration-200 focus-visible:bg-primary/5"
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
              className="flex items-center justify-center min-h-[44px] min-w-[44px] gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border hover:bg-primary/5 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{lang === 'en' ? 'SW' : 'EN'}</span>
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center min-h-[44px] px-4 py-2 gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20"
            >
              {t("Enroll Now", "Jisajili Sasa", lang)}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 left-0 z-50 h-screen w-4/5 max-w-sm bg-white shadow-xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <img src={IMAGES.crest} alt="School Crest" className="w-9 h-9 object-contain" />
                  <span className="font-heading text-base font-bold text-primary">{SCHOOL_NAME_SHORT}</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 hover:text-foreground hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-2">
                {NAV_LINKS.map((link) => (
                  <MobileNavLink
                    key={link.path}
                    link={link}
                    pathname={pathname}
                    lang={lang}
                  />
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-100 space-y-3">
                <button
                  onClick={toggle}
                  className="flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-lg text-sm font-medium border border-border hover:bg-primary/5 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  {lang === 'en' ? 'Kiswahili' : 'English'}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full min-h-[44px] px-4 py-2.5 gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  {t("Enroll Now", "Jisajili Sasa", lang)}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
