"use client";

import { useLanguage, t } from "@/lib/LanguageContext";
import type { Author } from "@/lib/news";

export default function AuthorCard({ author }: { author: Author }) {
  const { lang } = useLanguage();
  return (
    <div className="glass rounded-xl p-5 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
        {author.avatar}
      </div>
      <div>
        <p className="font-heading text-base font-bold text-foreground">
          {author.name}
        </p>
        <p className="text-xs text-blue-600 font-medium">
          {t(author.role, author.roleSw, lang)}
        </p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {t(author.bio, author.bioSw, lang)}
        </p>
      </div>
    </div>
  );
}
