"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

function LangUpdater() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LangUpdater />
      <div className="flex min-h-full flex-col">
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
