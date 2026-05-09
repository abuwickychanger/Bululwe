"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Printer, Calculator } from "lucide-react";
import { FEE_ADDITIONALS } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

const FORMS = ["Form 1", "Form 2", "Form 3", "Form 4"];
const CATEGORIES = ["Boarding", "Day"];

export default function FeesClient({
  feeMap,
}: {
  feeMap: Record<string, Record<string, number>>;
}) {
  const { lang } = useLanguage();
  const [form, setForm] = useState("Form 1");
  const [category, setCategory] = useState("Boarding");
  const printRef = useRef<HTMLDivElement>(null);

  const tuition = feeMap[form]?.[category] ?? 0;
  const additionsTotal = FEE_ADDITIONALS.reduce((sum, a) => sum + a.amount, 0);
  const grandTotal = tuition + additionsTotal;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Fee Breakdown - Bululwe Mixed Secondary School</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; padding: 40px; color: #111; }
            h1 { font-size: 24px; margin-bottom: 4px; }
            h2 { font-size: 18px; color: #555; font-weight: 400; margin-top: 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 24px; }
            th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background: #f5f5f5; font-weight: 600; }
            .total-row { font-weight: 700; font-size: 16px; background: #eef2ff; }
            .footer { margin-top: 32px; font-size: 13px; color: #777; border-top: 1px solid #ddd; padding-top: 16px; }
            .badge { display: inline-block; background: #2563eb; color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 13px; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>
          <h1>Bululwe Mixed Secondary School</h1>
          <h2>Fee Breakdown — ${form} (${category}) &mdash; Term 2, 2026</h2>
          <table>
            <thead>
              <tr><th>Item</th><th>Amount (KES)</th></tr>
            </thead>
            <tbody>
              <tr><td>Tuition (${form} - ${category})</td><td>${tuition.toLocaleString()}</td></tr>
              ${FEE_ADDITIONALS.map(a => `<tr><td>${lang === "sw" ? a.labelSw : a.label}</td><td>${a.amount.toLocaleString()}</td></tr>`).join("")}
              <tr class="total-row"><td>Total (per term)</td><td>KES ${grandTotal.toLocaleString()}</td></tr>
            </tbody>
          </table>
          <div class="footer">
            <p><span class="badge">Note</span> Fees are subject to change as per Ministry of Education guidelines.</p>
            <p>Bululwe Mixed Secondary School, Central Marama, Butere, Kakamega County.</p>
          </div>
          <script>window.onload = function() { window.print(); } <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="year-of-study" className="block text-sm font-medium text-foreground mb-2">
            {t("Year of Study", "Mwaka wa Kusoma", lang)}
          </label>
          <select
            id="year-of-study"
            value={form}
            onChange={(e) => setForm(e.target.value)}
            aria-label={t("Select year of study", "Chagua mwaka wa kusoma", lang)}
            className="w-full h-11 rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
          >
            {FORMS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
            {t("Category", "Kategoria", lang)}
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label={t("Select category", "Chagua kategoria", lang)}
            className="w-full h-11 rounded-xl border border-input bg-background/50 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6" aria-live="polite" aria-atomic="true">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {t("Total Fees per Term", "Ada Jumla kwa Muhula", lang)}
          </p>
          <motion.p
            key={`${grandTotal}-${lang}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="font-heading text-3xl font-bold text-foreground"
          >
            KES {grandTotal.toLocaleString()}
          </motion.p>
        </div>
      </div>

      <div ref={printRef} className="mb-6">
        <h4 className="font-semibold text-foreground mb-3">
          {t("Fee Breakdown", "Mchanganuo wa Ada", lang)}
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
            <span className="text-sm text-foreground">
              {t("Tuition", "Ada ya Masomo", lang)} ({form} - {category})
            </span>
            <span className="text-sm font-semibold text-foreground">KES {tuition.toLocaleString()}</span>
          </div>
          {FEE_ADDITIONALS.map((a) => (
            <div key={a.label} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="text-sm text-muted-foreground">
                {t(a.label, a.labelSw, lang)}
              </span>
              <span className="text-sm text-muted-foreground">KES {a.amount.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/20">
            <span className="text-sm font-bold text-foreground">
              {t("Grand Total (per term)", "Jumla Kuu (kwa muhula)", lang)}
            </span>
            <span className="text-sm font-bold text-primary">KES {grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white text-sm font-medium rounded-xl hover:opacity-90 transition-all duration-300 shadow-md shadow-primary/20"
        aria-label={t("Print fee breakdown", "Chapisha mchanganuo wa ada", lang)}
      >
        <Printer className="w-4 h-4" aria-hidden="true" />
        {t("Print Breakdown", "Chapisha Mchanganuo", lang)}
      </button>

      <p className="mt-4 text-xs text-muted-foreground">
        {t(
          "Fees are per term and subject to change as per Ministry of Education guidelines.",
          "Ada ni kwa muhula na inaweza kubadilika kulingana na miongozo ya Wizara ya Elimu.",
          lang
        )}
      </p>
    </>
  );
}
