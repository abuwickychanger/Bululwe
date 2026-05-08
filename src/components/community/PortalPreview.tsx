import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Shield,
  FileText,
  BarChart3,
  Calendar,
} from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

export default function PortalPreview() {
  const { lang } = useLanguage();
  const [showPass, setShowPass] = useState(false);

  const portalFeatures = [
    {
      icon: FileText,
      title: t("Fee Statements", "Taarifa za Ada", lang),
      desc: t(
        "View and download fee balances",
        "Tazama na pakua mizani ya ada",
        lang,
      ),
    },
    {
      icon: BarChart3,
      title: t("Report Cards", "Kadi za Ripoti", lang),
      desc: t(
        "Track academic performance",
        "Fuatilia utendaji wa kitaaluma",
        lang,
      ),
    },
    {
      icon: Calendar,
      title: t("Attendance", "Mahudhurio", lang),
      desc: t(
        "Monitor daily attendance records",
        "Fuatilia rekodi za mahudhurio",
        lang,
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={t(
            "Parent & Student Portal",
            "Lango la Mzazi na Mwanafunzi",
            lang,
          )}
          title={t("Secure", "Ufikiaji Salama wa", lang)}
          highlight={t("Access", "Habari", lang)}
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {t("Secure Login", "Ingia kwa Usalama", lang)}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("Student/Parent ID", "Kitambulisho", lang)}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="BMS/2026/001"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("Password", "Nywila", lang)}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <button
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPass ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* 2FA */}
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-2">
                  {t(
                    "Two-Factor Authentication Code",
                    "Msimbo wa Uthibitishaji wa Sababu Mbili",
                    lang,
                  )}
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-9 h-10 text-center rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm font-bold"
                    />
                  ))}
                </div>
              </div>

              <button className="w-full py-2.5 gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md">
                {t("Sign In", "Ingia", lang)}
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {portalFeatures.map((f, i) => (
              <div
                key={f.title}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{f.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
