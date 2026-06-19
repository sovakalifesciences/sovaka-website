import { getBlogs } from "@/lib/wordpress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

// ─── Static legacy articles (preserved from original journal page) ────────────
type StaticArticle = {
  date: string;
  /** ISO date string for sorting, e.g. "2026-05-01" */
  sortDate: string;
  readTime: string;
  category: string;
  title: string;
  description: string;
  href: string;
  bannerImage?: string;
  authorName?: string;
};

const STATIC_ARTICLES: StaticArticle[] = [
  {
    date: "May 2026",
    sortDate: "2026-05-20",
    readTime: "7 min read",
    category: "Infrastructure Strategy",
    title: "The Future of Intelligent Dental Imaging Infrastructure in India",
    description:
      "Exploring the shift from isolated diagnostic clinics to connected imaging networks, AI-assisted PACS systems, and centralized radiology infrastructure.",
    href: "/insights/future-of-intelligent-dental-imaging-infrastructure-india",
  },
  {
    date: "May 2026",
    sortDate: "2026-05-10",
    readTime: "6 min read",
    category: "Training & Careers",
    title: "Addressing the Workforce Gap in CBCT & OPG Imaging",
    description:
      "How active clinical environment training and standardized operational SOPs are building the next generation of specialized dental imaging technologists.",
    href: "/insights/addressing-the-workforce-gap-in-cbct-opg-imaging",
  },
  {
    date: "April 2026",
    sortDate: "2026-04-20",
    readTime: "5 min read",
    category: "Operational Workflows",
    title: "Why Centralized Oral Radiology Workflows Matter",
    description:
      "Analyzing the impact of standardized teleradiology routing, OMR reporting validation, and strict SLAs on modern dental diagnostics.",
    href: "/insights/why-centralized-oral-radiology-workflows-matter",
  },
  {
    date: "April 2026",
    sortDate: "2026-04-05",
    readTime: "8 min read",
    category: "Ecosystem Expansion",
    title: "The Operational Challenges of Scaling Dental Imaging Centres",
    description:
      "A strategic overview of capital allocations, regulatory compliance, quality control, and the FOCO franchise model in dental radiology.",
    href: "/insights/operational-challenges-scaling-dental-imaging-centres",
  },
  {
    date: "March 2026",
    sortDate: "2026-03-15",
    readTime: "6 min read",
    category: "Ecosystem Technology",
    title: "How AI Will Transform Dental Imaging Workflows",
    description:
      "Positioning artificial intelligence as a workflow augmentation and orchestration tool rather than an autonomous replacement in oral teleradiology.",
    href: "/insights/how-ai-will-transform-dental-imaging-workflows",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDateRaw(raw: string): string {
  if (!raw) return "";
  if (raw.length === 8) {
    const y = raw.substring(0, 4);
    const m = raw.substring(4, 6);
    const d = raw.substring(6, 8);
    return new Date(`${y}-${m}-${d}`).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }
  return raw;
}

/** Convert raw YYYYMMDD to ISO string for sorting */
function toSortDate(raw: string): string {
  if (raw.length === 8)
    return `${raw.substring(0, 4)}-${raw.substring(4, 6)}-${raw.substring(6, 8)}`;
  return raw;
}

// ─── Unified row types ────────────────────────────────────────────────────────

type ArticleRow =
  | { kind: "wp"; id: number; slug: string; title: string; description: string; date: string; sortDate: string; bannerImage: string; authorName: string; authorImage: string }
  | { kind: "static"; title: string; description: string; date: string; sortDate: string; category: string; readTime: string; href: string; bannerImage?: string; authorName?: string };

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function JournalPage() {
  const blogs = await getBlogs();

  const wpRows: ArticleRow[] = blogs.map((b) => ({
    kind: "wp",
    id: b.id,
    slug: b.slug,
    title: b.title,
    description: b.short_desc,
    date: formatDateRaw(b.date_published),
    sortDate: toSortDate(b.date_published),
    bannerImage: b.banner_image,
    authorName: b.author_name,
    authorImage: b.author_image,
  }));

  const staticRows: ArticleRow[] = STATIC_ARTICLES.map((a) => ({
    kind: "static",
    title: a.title,
    description: a.description,
    date: a.date,
    sortDate: a.sortDate,
    category: a.category,
    readTime: a.readTime,
    href: a.href,
    bannerImage: a.bannerImage,
    authorName: a.authorName,
  }));

  // Merge and sort newest-first
  const allArticles = [...wpRows, ...staticRows].sort(
    (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[120px] pb-24 text-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">

          {/* Header Section */}
          <section className="mb-20 lg:mb-28">
            <div className="max-w-[960px]">
              <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] bg-[#F0EBE1] border border-[#D8CFC0] px-3 py-1.5 rounded-sm mb-8">
                Ecosystem Journal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] mb-8">
                Insights &amp; perspectives.
              </h1>
              <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed max-w-[760px]">
                Analysis, technical documentation, and corporate roadmap updates from the SOVAKA Lifesciences dental imaging infrastructure network.
              </p>
            </div>
          </section>

          {/* Articles List */}
          <section className="mb-32 border-t border-zinc-100 pt-20">
            <div className="space-y-16">
              {allArticles.map((article, index) => {
                const href =
                  article.kind === "wp"
                    ? `/journal/${article.slug}`
                    : article.href;

                return (
                  <div
                    key={article.kind === "wp" ? `wp-${article.id}` : `static-${index}`}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-zinc-100 pb-16"
                  >
                    {/* Left Column: thumbnail + meta */}
                    <div className="lg:col-span-3 space-y-3">
                      {article.bannerImage && (
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm mb-4">
                          <Image
                            src={article.bannerImage}
                            alt={article.title.replace(/<[^>]+>/g, "")}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 25vw"
                          />
                        </div>
                      )}

                      {/* Category tag — only for static articles */}
                      {article.kind === "static" && (
                        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#666666]">
                          {article.category}
                        </span>
                      )}

                      <div className="flex items-center gap-4 text-xs text-[#666666] font-mono flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        {article.kind === "static" && article.readTime && (
                          <span>{article.readTime}</span>
                        )}
                        {article.kind === "wp" && article.authorName && (
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {article.authorName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column: title + description + CTA */}
                    <div className="lg:col-span-9 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] hover:text-[#4F4F4F] transition-colors">
                        <Link
                          href={href}
                          dangerouslySetInnerHTML={{ __html: article.title }}
                        />
                      </h2>
                      <div
                        className="text-sm md:text-base text-[#4F4F4F] leading-relaxed max-w-[720px] line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: article.description }}
                      />
                      <div className="pt-2">
                        <Link
                          href={href}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#4F4F4F] transition-colors group"
                        >
                          <span>
                            Access Document
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="border-t border-zinc-100 pt-20 text-center">
            <div className="max-w-[600px] mx-auto space-y-8">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#1A1A1A]">
                Subscribe to our roadmap updates.
              </h2>
              <p className="text-sm text-[#4F4F4F] leading-relaxed">
                Stay updated on teleradiology expansions, technician batch graduations, and AI features inside our connected radiology network.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 text-white font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 hover:scale-[0.98]"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
