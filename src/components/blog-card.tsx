import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

export function BlogCard({ blog }: { blog: Blog }) {
  // Format date assuming YYYYMMDD or parseable string
  let formattedDate = blog.date_published;
  if (blog.date_published && blog.date_published.length === 8) {
    // YYYYMMDD
    const y = blog.date_published.substring(0, 4);
    const m = blog.date_published.substring(4, 6);
    const d = blog.date_published.substring(6, 8);
    formattedDate = new Date(`${y}-${m}-${d}`).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return (
    <Link href={`/journal/${blog.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-color-sand-100 hover:border-color-sand-200 hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[16/9] overflow-hidden bg-color-sand-50">
        {blog.banner_image ? (
          <Image
            src={blog.banner_image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-color-sand-100" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-3 font-medium">
          {formattedDate}
        </p>
        <h3 className="text-xl font-bold font-sans text-color-foreground mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{ __html: blog.title }} />
        <div 
          className="text-gray-600 mb-6 line-clamp-3 flex-grow font-sans text-sm"
          dangerouslySetInnerHTML={{ __html: blog.short_desc }}
        />
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-color-sand-100">
          {blog.author_image ? (
            <Image
              src={blog.author_image}
              alt={blog.author_name}
              width={32}
              height={32}
              className="rounded-full object-cover aspect-square"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-color-sand-200 shrink-0" />
          )}
          <span className="font-semibold text-sm line-clamp-1">{blog.author_name}</span>
        </div>
      </div>
    </Link>
  );
}
