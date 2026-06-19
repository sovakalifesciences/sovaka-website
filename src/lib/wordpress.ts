import { Blog, WPBlog } from "@/types/blog";

const WP_URL = "https://backend.sovakalifesciences.com/wp-json/wp/v2";

export async function getMediaUrl(mediaId: number | string | undefined): Promise<string> {
  if (!mediaId) return "";
  if (typeof mediaId === "string" && mediaId.startsWith("http")) return mediaId;

  try {
    const res = await fetch(`${WP_URL}/media/${mediaId}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return "";
    const data = await res.json();
    return data.source_url || "";
  } catch (error) {
    console.error(`Failed to fetch media ${mediaId}`, error);
    return "";
  }
}

export async function mapWPBlogToBlog(wpBlog: WPBlog): Promise<Blog> {
  const bannerImageId = wpBlog.acf.banner_image;
  // Handle typo in REST API: authon_image instead of author_image
  const authorImageId = wpBlog.acf.author_image || wpBlog.acf.authon_image;

  const [banner_image, author_image] = await Promise.all([
    getMediaUrl(bannerImageId),
    getMediaUrl(authorImageId),
  ]);

  return {
    id: wpBlog.id,
    slug: wpBlog.slug,
    title: wpBlog.title.rendered,
    short_desc: wpBlog.acf.short_desc,
    banner_image,
    blog_article: wpBlog.acf.blog_article,
    author_name: wpBlog.acf.author_name,
    author_image,
    date_published: wpBlog.acf.date_published,
  };
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${WP_URL}/blog`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const wpBlogs: WPBlog[] = await res.json();
    return await Promise.all(wpBlogs.map(mapWPBlogToBlog));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${WP_URL}/blog?slug=${slug}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const wpBlogs: WPBlog[] = await res.json();
    if (!wpBlogs || wpBlogs.length === 0) return null;
    
    return await mapWPBlogToBlog(wpBlogs[0]);
  } catch (error) {
    console.error(`Error fetching blog ${slug}:`, error);
    return null;
  }
}
