import Layout from '@components/layout/layout.component';
import PostItem from '@components/post-item/post-item.component';
import SEO from '@components/seo';
import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            description
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            music {
              title
              url
            }
          }
          timeToRead
        }
      }
    }
  }
`;

export default function BlogList({ data }) {
  const postList = data.allMarkdownRemark.edges.map(({node}) => ({
    ...node.frontmatter,
    timeToRead: node.timeToRead,
    slug: node.fields.slug,
  }));
  return (
    <Layout>
      <SEO title='Home' />
      {postList.map((post, index) => (
        <PostItem
          key={index}
          slug={post.slug}
          category='JS'
          date={post.date}
          timeToRead={post.timeToRead}
          title={post.title}
          description={post.description}
        />
      ))}
    </Layout>
  );
}
