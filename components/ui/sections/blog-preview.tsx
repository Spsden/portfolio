"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fetchBlogs } from "@/lib/api/blogs";
import type { Blog } from "@/types/blog.t";
import { Reveal } from "../enhancers/motion-utils";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function excerpt(body: string, max = 120): string {
  const text = stripHtml(body);
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchBlogs(3)
      .then((res) => {
        if (!cancelled) setBlogs(res.data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section className="py-8 sm:py-12">
      <Reveal>
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-theme-fg">
              Latest from the blog
            </h2>
            <p className="mt-1.5 text-sm text-theme-fg-400 max-w-md">
              Thoughts on backend engineering, distributed systems, and
              infrastructure.
            </p>
          </div>
          <Link
            href="/blogs"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-theme-fg-400 hover:text-theme-fg transition-colors shrink-0"
          >
            View all
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Reveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {blogs.slice(0, 3).map((blog) => (
          <motion.div key={blog.id} variants={item}>
            <Link
              href={`/blogs/${blog.id}`}
              className="group block bg-theme-bg-200 rounded-2xl border border-theme-bg-300 shadow-theme-lg hover:shadow-theme-xl transition-all duration-200 overflow-hidden h-full"
            >
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-xs text-theme-fg-400 mb-2.5">
                  <time dateTime={blog.created_at}>
                    {formatDate(blog.created_at)}
                  </time>
                  <span className="w-1 h-1 rounded-full bg-theme-fg-400 shrink-0" />
                  <span className="truncate">{blog.author}</span>
                </div>

                <h3 className="text-base font-semibold text-theme-fg group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-theme-fg-300 leading-relaxed line-clamp-2">
                  {excerpt(blog.body)}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-theme-fg-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  Read
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-theme-fg-400 hover:text-theme-fg transition-colors"
        >
          View all blogs
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
