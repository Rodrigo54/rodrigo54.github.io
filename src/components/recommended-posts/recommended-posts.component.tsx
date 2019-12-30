import getThemeColor from '@utils/getThemeColor';
import propTypes from 'prop-types';
import React from 'react';
import { ArrowLeftS as Previous } from 'styled-icons/remix-line/ArrowLeftS';
import { ArrowRightS as Next } from 'styled-icons/remix-line/ArrowRightS';

import * as S from './recommended-posts.style';

export default function RecommendedPosts({ next, previous }) {
  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          to={`/blog${previous.fields.slug}`}
          cover={true}
          direction='left'
          bg={getThemeColor()}
          className='previous'
        >
          <p><Previous size='20'/> {previous.frontmatter.title}</p>
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink
          to={`/blog${next.fields.slug}`}
          cover={true}
          direction='right'
          bg={getThemeColor()}
          className='next'
        >
          <p>{next.frontmatter.title} <Next size='20'/></p>
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  );
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};
