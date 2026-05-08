import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { IMAGES, SCHOOL_NAME, SCHOOL_LOCATION } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    labelSw: "Anwani",
    value: "Central Marama, Butere, Kakamega County",
  },
  { icon: Phone, label: "Phone", labelSw: "Simu", value: "+254 700 000 000" },
  {
    icon: Mail,
    label: "Email",
    labelSw: "Barua Pepe",
    value: "info@bululwe.sc.ke",
  },
  {
    icon: Clock,
    label: "Office Hours",
    labelSw: "Masaa ya Ofisi",
    value: "Mon-Fri: 7:30 AM - 5:00 PM",
  },
];

export default function Contact() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.campus}
          alt="Bululwe campus grounds with trees and buildings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Get in Touch", "Wasiliana Nasi", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Contact Us", "Wasiliana Nasi", lang)}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {t("We'd Love to", "Tungependa", lang)}{" "}
                  <span className="text-gradient">
                    {t("Hear From You", "Kusikia Kutoka Kwako", lang)}
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  {t(
                    "Have questions about admissions, academics, or school life? Reach out to us and we'll respond promptly.",
                    "Una maswali kuhusu udahili, masomo, au maisha ya shule? Wasiliana nasi na tutajibu haraka.",
                    lang,
                  )}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t(c.label, c.labelSw, lang)}
                      </p>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps?q=Central+Marama+Butere+Kakamega+Kenya&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass rounded-2xl p-6 md:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-success" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {t("Message Sent!", "Ujumbe Umetumwa!", lang)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "We'll get back to you within 24 hours.",
                      "Tutakujibu ndani ya masaa 24.",
                      lang,
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {t("Send a Message", "Tuma Ujumbe", lang)}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("Full Name", "Jina Kamili", lang)} *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("Email", "Barua Pepe", lang)} *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("Phone Number", "Nambari ya Simu", lang)}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("Subject", "Somo", lang)} *
                      </label>
                      <select
                        id="contact-subject"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      >
                      <option value="">
                        {t("Select a topic", "Chagua mada", lang)}
                      </option>
                      <option>
                        {t("Admissions Inquiry", "Maswali ya Udahili", lang)}
                      </option>
                      <option>
                        {t("Academic Information", "Habari za Kitaaluma", lang)}
                      </option>
                      <option>
                        {t("Fee Structure", "Muundo wa Ada", lang)}
                      </option>
                      <option>
                        {t("General Inquiry", "Maswali ya Jumla", lang)}
                      </option>
                      <option>
                        {t("Alumni Relations", "Mahusiano ya Wahitimu", lang)}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">
                        {t("Message", "Ujumbe", lang)} *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                      />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {t("Send Message", "Tuma Ujumbe", lang)}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
