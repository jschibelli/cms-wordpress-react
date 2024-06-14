export type PostType = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  author: {
    node: {
      name: string;
      firstName: string;
      lastName: string;
      avatar: {
        url: string;
      };
    };
  };
  categories: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
  tags: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
  ogImage?: {
    url: string;
  };
  ogDescription?: string;
  content: string;
};
