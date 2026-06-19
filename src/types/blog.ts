export type WPBlog = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    short_desc: string;
    banner_image: number | string;
    blog_article: string;
    author_name: string;
    author_image?: number | string;
    authon_image?: number | string;
    date_published: string;
  };
};

export type Blog = {
  id: number;
  slug: string;
  title: string;
  short_desc: string;
  banner_image: string;
  blog_article: string;
  author_name: string;
  author_image: string;
  date_published: string;
};
