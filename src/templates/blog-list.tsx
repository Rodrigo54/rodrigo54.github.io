import Layout from '@components/layout/layout.component';
import Pagination from '@components/pagination/pagination.component';
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

export default function BlogList({ pageContext, data }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;
  const postList = data.allMarkdownRemark.edges.map(({node}) => ({
    ...node.frontmatter,
    timeToRead: node.timeToRead,
    slug: node.fields.slug,
  }));
  return (
    <Layout>
      <SEO title='Blog' />
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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
}
