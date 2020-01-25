import Comments from '@components/comments';
import Layout from '@components/layout';
import RecommendedPosts from '@components/recommended-posts';
import SEO from '@components/seo';
import { Post } from '@model/Post';
import { graphql } from 'gatsby';
import React from 'react';

import * as S from './styles';

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        description
        thumbnail
        comments
        date_timestamp: date
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        music {
          title
          url
        }
      }
      html
      timeToRead
    }
  }
`;

type node = {
  fields: {
    slug: string,
  };
  frontmatter: {
    title: string,
  }
};

type Props = {
  data: { markdownRemark: Post };
  pageContext: {
    nextPost: node,
    previousPost: node,
  };
};

const BlogPost: React.FC<Props> = ({ data, pageContext: { nextPost, previousPost } }) => {
  const next = nextPost ? {
    slug: nextPost.fields.slug,
    title: nextPost.frontmatter.title,
  } : undefined;

  const previous = previousPost ? {
    slug: previousPost.fields.slug,
    title: previousPost.frontmatter.title,
  } : undefined;

  const { frontmatter, timeToRead, html, fields: { slug } } = data.markdownRemark;
  const identifier = new Date(frontmatter.date_timestamp).getTime();
  const comments = frontmatter.comments ?
    (<Comments identifier={identifier} url={slug} title={frontmatter.title} />) : undefined;
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.thumbnail}
      />
      <S.PostHeader>
        <S.PostDate>
          {frontmatter.date} • {timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostDescription>{frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      {comments}
    </Layout>
  );
}

export default BlogPost;
