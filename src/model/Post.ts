export interface Post {
  fields: {
    slug: string,
  };
  frontmatter: {
    title: string,
    author: string,
    description: string,
    thumbnail: string,
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
