"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, User } from "lucide-react";
import { useLanguage, t } from "@/lib/LanguageContext";
import type { Comment } from "@/lib/news";

export default function CommentSection({
  comments: initialComments,
}: {
  comments: Comment[];
}) {
  const { lang } = useLanguage();
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: name,
      body,
      date: new Date().toISOString().split("T")[0],
      avatar: name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2),
    };
    setComments([...comments, newComment]);
    setName("");
    setBody("");
  };

  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" aria-hidden="true" />
        {t("Comments", "Maoni", lang)} ({comments.length})
      </h2>

      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {comments.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
                  {c.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {c.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{c.date}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pl-11">{c.body}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="glass rounded-xl p-5 space-y-4">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {t("Leave a Comment", "Acha Maoni", lang)}
        </h3>
        <label htmlFor="comment-name" className="sr-only">{t("Your Name", "Jina Lako", lang)}</label>
        <input
          id="comment-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("Your Name", "Jina Lako", lang)}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
        />
        <label htmlFor="comment-body" className="sr-only">{t("Write your comment...", "Andika maoni yako...", lang)}</label>
        <textarea
          id="comment-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={t("Write your comment...", "Andika maoni yako...", lang)}
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-2.5 gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {t("Post Comment", "Tuma Maoni", lang)}
        </button>
      </form>
    </div>
  );
}
