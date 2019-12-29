import Layout from '@components/layout/layout.component';
import PostItem from '@components/post-item/post-item.component';
import SEO from '@components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query{
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
          edges{
            node {
              timeToRead
              frontmatter{
                title
                author
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                music{
                  title
                  url
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  const postList = allMarkdownRemark.edges.map(({node}) => ({
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
