import Layout from '@components/layout';
import * as S from '@templates/blog-list/styles';
import Pagination from '@components/pagination';
import PostItem from '@components/post-item';
import SEO from '@components/seo';
import getThemeColor from '@utils/getThemeColor';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import { Post } from '@model/Post';

type allMarkdownRemark = {
  allMarkdownRemark: { edges: { node: Post }[] }
};

const IndexPage: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<allMarkdownRemark>(
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

export default IndexPage;
