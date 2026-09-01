"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/sections/navbar";
import { PageContainer } from "@/app/page";
import BlogCard from "@/components/helpers/blog-card";
import Footer from "@/components/ui/sections/footer";
import { fetchBlogs } from "@/lib/api/blogs";
import type { Blog } from "@/types/blog.t";
import { Reveal, StaggerWrapper, StaggerItem } from "@/components/ui/enhancers/motion-utils";

function Skeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-theme-bg-200 rounded-2xl border border-theme-bg-300 p-6 sm:p-7 animate-pulse"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-3 w-24 bg-theme-bg-300 rounded" />
            <div className="h-1 w-1 rounded-full bg-theme-bg-300" />
            <div className="h-3 w-16 bg-theme-bg-300 rounded" />
          </div>
          <div className="h-5 w-3/4 bg-theme-bg-300 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-theme-bg-300 rounded" />
            <div className="h-3 w-5/6 bg-theme-bg-300 rounded" />
            <div className="h-3 w-2/3 bg-theme-bg-300 rounded" />
          </div>
          <div className="h-4 w-24 bg-theme-bg-300 rounded mt-5" />
        </div>
      ))}
    </div>
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchBlogs(10);
        if (!cancelled) {
          setBlogs(res.data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load blogs",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Navbar />
      <PageContainer>
        <section className="py-8 sm:py-12 md:py-16">
          <Reveal>
            <header className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-theme-fg">
                Blogs
              </h1>
              <p className="mt-2 text-sm sm:text-base text-theme-fg-400 max-w-xl">
                Thoughts on backend engineering, distributed systems,
                infrastructure, culture and whatever I learn.
              </p>
            </header>
          </Reveal>

          {loading && <Skeleton />}

          {!loading && error && (
            <div className="text-center py-16">
              <p className="text-theme-fg-400 text-sm">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-theme-fg-400 text-sm">
                No blogs published yet. Check back soon.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <StaggerItem key={blog.id}>
                  <BlogCard blog={blog} />
                </StaggerItem>
              ))}
            </StaggerWrapper>
          )}
        </section>
      </PageContainer>
      <Footer />
    </>
  );
}
