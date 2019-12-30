import Comments from '@components/comments/comments.component';
import Layout from '@components/layout/layout.component';
import * as S from '@components/post/post.style';
import RecommendedPosts from '@components/recommended-posts/recommended-posts.component';
import SEO from '@components/seo';
import { graphql } from 'gatsby';
import React from 'react';

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

export default function BlogPost({ data, pageContext }) {
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  const post = data.markdownRemark;
  const { frontmatter, timeToRead, html, fields: { slug } } = post;
  const identifier = new Date(frontmatter.date_timestamp).getTime();
  const comments =  frontmatter.comments ?
    (<Comments identifier={identifier} url={slug} title={frontmatter.title} />) : undefined;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail}
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
