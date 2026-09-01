import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { fetchBlog } from "@/lib/api/blogs";
import { ApiError } from "@/lib/api/client";
import Navbar from "@/components/ui/sections/navbar";
import Footer from "@/components/ui/sections/footer";

type Props = {
  params: Promise<{ id: string }>;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const blog = await fetchBlog(id);
    return {
      title: `${blog.title} — Bhanupratap Singh`,
      description: blog.title,
      openGraph: {
        title: blog.title,
        description: blog.title,
      },
    };
  } catch {
    return {
      title: "Blog — Bhanupratap Singh",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  let blog;
  try {
    blog = await fetchBlog(id);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      notFound();
    }
    throw err;
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm text-theme-fg-400 hover:text-theme-fg transition-colors mb-6 sm:mb-8"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to blogs
        </Link>

        <article>
          <header className="mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-theme-fg leading-tight">
              {blog.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-theme-fg-400">
              <span>{blog.author}</span>
              <span className="w-1 h-1 rounded-full bg-theme-fg-400" />
              <time dateTime={blog.created_at}>
                {formatDate(blog.created_at)}
              </time>
            </div>
          </header>

          <div
            className="prose prose-sm sm:prose-base max-w-none
              prose-headings:text-theme-fg prose-headings:font-semibold
              prose-p:text-theme-fg-300 prose-p:leading-relaxed
              prose-a:text-indigo-500 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-theme-fg prose-code:text-theme-fg-200
              prose-pre:bg-theme-bg-300 prose-pre:border prose-pre:border-theme-bg-400
              prose-blockquote:border-theme-fg-400 prose-blockquote:text-theme-fg-300
              prose-li:text-theme-fg-300
              [&_img]:rounded-xl [&_img]:w-full [&_img]:h-auto
              space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </article>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-theme-bg-300">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-sm text-theme-fg-400 hover:text-theme-fg transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to blogs
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
