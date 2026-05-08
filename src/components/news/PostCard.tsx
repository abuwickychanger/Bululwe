"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";
import type { Post } from "@/lib/news";

export default function PostCard({ post }: { post: Post }) {
  const { lang } = useLanguage();
  return (
    <div className="glass rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <Link href={`/news/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            {t(post.categorySw, post.categorySw, lang)}
          </span>
        </div>
        <Link href={`/news/${post.slug}`}>
          <h3 className="font-heading text-lg font-bold text-foreground mb-2 hover:text-blue-600 transition-colors">
            {t(post.title, post.titleSw, lang)}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {t(post.excerpt, post.excerptSw, lang)}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <Link
            href={`/news/${post.slug}`}
            className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
          >
            {t("Read More", "Soma Zaidi", lang)}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
