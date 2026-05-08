import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "sw";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  isSwahili: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "sw" : "en"));
  return (
    <LanguageContext.Provider
      value={{ lang, toggle, isSwahili: lang === "sw" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function t(en: string, sw: string, lang: Lang): string {
  return lang === "sw" ? sw || en : en;
}
