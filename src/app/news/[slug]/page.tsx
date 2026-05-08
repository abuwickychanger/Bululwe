"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { useLanguage, t } from "@/lib/LanguageContext";
import { getPostBySlug, getRecentPosts } from "@/lib/news";
import AuthorCard from "@/components/news/AuthorCard";
import CommentSection from "@/components/news/CommentSection";
import PostCard from "@/components/news/PostCard";

export default function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          {t("Post Not Found", "Chapisho Halijapatikana", lang)}
        </h1>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("Back to News", "Rudi kwenye Habari", lang)}
        </Link>
      </div>
    );
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/90 via-[#002060]/70 to-[#002060]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("Back to News", "Rudi kwenye Habari", lang)}
            </Link>
            <span className="inline-block text-xs font-medium text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-3">
              {t(post.categorySw, post.categorySw, lang)}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              {t(post.title, post.titleSw, lang)}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <div
              className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: t(post.body, post.bodySw, lang),
              }}
            />

            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-border">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10">
              <CommentSection comments={post.comments} />
            </div>
          </article>

          <aside className="space-y-6">
            <AuthorCard author={post.author} />

            {recentPosts.length > 0 && (
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  {t("Recent Posts", "Machapisho ya Hivi Karibuni", lang)}
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((rp) => (
                    <div key={rp.slug} className="glass rounded-xl overflow-hidden">
                      <Link href={`/news/${rp.slug}`}>
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-32 object-cover"
                        />
                      </Link>
                      <div className="p-3">
                        <Link href={`/news/${rp.slug}`}>
                          <h4 className="font-heading text-sm font-bold text-foreground hover:text-blue-600 transition-colors">
                            {t(rp.title, rp.titleSw, lang)}
                          </h4>
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {rp.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
