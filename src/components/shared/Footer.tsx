import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { SCHOOL_NAME, IMAGES, SCHOOL_LOCATION } from '@/lib/constants';
import { useLanguage, t } from '@/lib/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-gradient-to-r from-[#002060] via-[#002060] to-[#001030] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={IMAGES.crest} alt="Crest" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-heading text-lg font-bold">{SCHOOL_NAME}</p>
                <p className="text-xs text-white/60">{t("Knowledge is Power", "Elimu ni Nguvu", lang)}</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {t(
                "Nurturing excellence in education, character, and community since our founding. Preparing students for a bright future.",
                "Kukuza ubora katika elimu, tabia, na jamii tangu kuanzishwa kwetu.",
                lang
              )}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("Quick Links", "Viungo Haraka", lang)}</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: t("About Us", "Kuhusu Sisi", lang) },
                { to: "/academics", label: t("Academics", "Masomo", lang) },
                { to: "/campus", label: t("Campus Life", "Maisha ya Shule", lang) },
                { to: "/community", label: t("Community", "Jamii", lang) },
                { to: "/contact", label: t("Contact", "Wasiliana", lang) },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("Contact Us", "Wasiliana Nasi", lang)}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-200" />
                {SCHOOL_LOCATION}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-blue-200" />
                +254 700 000 000
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-blue-200" />
                info@bululwe.sc.ke
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 shrink-0 text-blue-200" />
                Mon-Fri: 7:30 AM - 5:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("Stay Connected", "Endelea Kuwasiliana", lang)}</h4>
            <p className="text-sm text-white/70 mb-4">
              {t("Get the latest updates from our school community.", "Pata habari mpya kutoka jamii yetu ya shule.", lang)}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("Your email", "Barua pepe yako", lang)}
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue-200"
              />
              <button className="px-4 py-2 bg-blue-200 text-blue-900 text-sm font-medium rounded-lg hover:bg-white transition-opacity">
                {t("Join", "Jiunge", lang)}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME}. {t("All rights reserved.", "Haki zote zimehifadhiwa.", lang)}</p>
          <p>{t("Butere Sub-County, Kakamega County, Kenya", "Kata ya Butere, Kaunti ya Kakamega, Kenya", lang)}</p>
        </div>
      </div>
    </footer>
  );
}
