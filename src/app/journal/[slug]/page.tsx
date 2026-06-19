import { getBlogBySlug, getBlogs } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: "Article Not Found" };

  const description = blog.short_desc.replace(/<[^>]+>/g, "").substring(0, 160);
  const plainTitle = blog.title.replace(/<[^>]+>/g, "");

  return {
    title: plainTitle,
    description,
    alternates: { canonical: `https://sovakalifesciences.com/journal/${slug}` },
    openGraph: {
      title: plainTitle,
      description,
      url: `https://sovakalifesciences.com/journal/${slug}`,
      type: "article",
      images: blog.banner_image ? [{ url: blog.banner_image }] : [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

function formatDate(raw: string): string {
  if (!raw) return "";
  if (raw.length === 8) {
    const y = raw.substring(0, 4);
    const m = raw.substring(4, 6);
    const d = raw.substring(6, 8);
    return new Date(`${y}-${m}-${d}`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return raw;
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const formattedDate = formatDate(blog.date_published);
  const wordCount = blog.blog_article.replace(/<[^>]+>/g, "").split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <>
      <Header />
      <article className="min-h-screen bg-white pt-[120px] pb-24 text-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 pt-10">

          {/* ← Back link */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#666666] hover:text-[#1A1A1A] transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Journal
          </Link>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

            {/* ── Left sidebar ─────────────────────────────── */}
            <aside className="lg:w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-28 space-y-8">

              {/* Banner image — full, uncropped */}
              {blog.banner_image && (
                <div className="w-full rounded-sm overflow-hidden border border-zinc-100">
                  <Image
                    src={blog.banner_image}
                    alt={blog.title.replace(/<[^>]+>/g, "")}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              )}

              <hr className="border-zinc-100" />

              {/* Author */}
              {blog.author_name && (
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#666666]">
                    Author
                  </p>
                  <div className="flex items-center gap-2">
                    {blog.author_image ? (
                      <Image
                        src={blog.author_image}
                        alt={blog.author_name}
                        width={24}
                        height={24}
                        className="rounded-full object-cover aspect-square shrink-0"
                      />
                    ) : (
                      <User className="w-4 h-4 text-[#666666]" />
                    )}
                    <span className="text-sm font-medium text-[#1A1A1A]">
                      {blog.author_name}
                    </span>
                  </div>
                </div>
              )}

              {/* Published */}
              {formattedDate && (
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#666666]">
                    Published
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#1A1A1A]">
                    <Calendar className="w-3.5 h-3.5 text-[#666666] shrink-0" />
                    <span>{formattedDate}</span>
                  </div>
                </div>
              )}

              {/* Reading Time */}
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#666666]">
                  Reading Time
                </p>
                <div className="flex items-center gap-1.5 text-sm text-[#1A1A1A]">
                  <Clock className="w-3.5 h-3.5 text-[#666666] shrink-0" />
                  <span>{readTime} min read</span>
                </div>
              </div>

            </aside>

            {/* ── Main content ─────────────────────────────── */}
            <div className="flex-1 min-w-0">

              {/* Title */}
              <h1
                className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] mb-10"
                dangerouslySetInnerHTML={{ __html: blog.title }}
              />

              <hr className="border-zinc-100 mb-10" />

              {/* Article body */}
              <div
                className="text-[#1A1A1A] text-lg leading-relaxed
                  [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:text-[#1A1A1A]
                  [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-[#1A1A1A]
                  [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-[#1A1A1A]
                  [&>p]:mb-7 [&>p]:text-[#1A1A1A]
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-7 [&>ul>li]:mb-2 [&>ul>li]:text-[#4F4F4F]
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-7 [&>ol>li]:mb-2 [&>ol>li]:text-[#4F4F4F]
                  [&>blockquote]:border-l-2 [&>blockquote]:border-zinc-300 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-8 [&>blockquote]:text-[#4F4F4F]
                  [&>img]:rounded-sm [&>img]:my-10 [&>img]:w-full [&>img]:h-auto
                  [&>figure]:my-10 [&>figure>img]:rounded-sm [&>figure>img]:w-full
                  [&>a]:underline [&>a]:text-[#1A1A1A] [&>a:hover]:text-[#4F4F4F]
                  [&>strong]:font-semibold [&>strong]:text-[#1A1A1A]
                  [&>table]:w-full [&>table]:border-collapse [&>table]:mb-8
                  [&>table_th]:border [&>table_th]:border-zinc-200 [&>table_th]:px-4 [&>table_th]:py-2 [&>table_th]:bg-[#F0EBE1] [&>table_th]:text-sm [&>table_th]:font-semibold [&>table_th]:text-left
                  [&>table_td]:border [&>table_td]:border-zinc-200 [&>table_td]:px-4 [&>table_td]:py-2 [&>table_td]:text-sm [&>table_td]:text-[#4F4F4F]"
                dangerouslySetInnerHTML={{ __html: blog.blog_article }}
              />
            </div>

          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
