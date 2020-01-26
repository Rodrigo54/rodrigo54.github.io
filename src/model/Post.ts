export interface Post {
  fields: {
    slug: string,
  };
  frontmatter: {
    title: string,
    author: string,
    description: string,
    featuredImage: any,
    comments: string,
    date_timestamp: string,
    date: string,
    music: {
      title: string,
      url: string,
    }
  };
  html: string;
  timeToRead: number;
};
