import Layout from '@components/layout/layout.component';
import * as S from '@components/list-wrapper/list-wrapper.styled';
import Pagination from '@components/pagination/pagination.component';
import PostItem from '@components/post-item/post-item.component';
import SEO from '@components/seo';
import getThemeColor from '@utils/getThemeColor';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query{
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
        ){
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
      <S.ListWrapper>
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
      </S.ListWrapper>
      <Pagination>
        <div />
        <AniLink
          cover={true}
          direction='left'
          bg={getThemeColor()}
          duration={0.6}
          to={'/blog/'}
        >
          Veja mais artigos
        </AniLink>
      </Pagination>
    </Layout>
  );
}
