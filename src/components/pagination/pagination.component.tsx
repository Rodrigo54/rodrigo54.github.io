import getThemeColor from '@utils/getThemeColor';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './pagination.style';

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
  children,
}) {

  let content;

  if (children) {
    content = children;
  } else {
    content = (
      <>
        {!isFirst && (
          <AniLink
            to={prevPage}
            cover={true}
            direction='left'
            bg={getThemeColor()}
            duration={0.6}
          >
            ← Página Anterior
          </AniLink>
        )}
        <p>
          {currentPage} de {numPages}
        </p>
        {!isLast && (
          <AniLink
            to={nextPage}
            cover={true}
            direction='right'
            bg={getThemeColor()}
            duration={0.6}
          >
            Proxima Página →
          </AniLink>
        )}
      </>
    );
  }
  return (
    <S.PaginationWrapper>
      {content}
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  children: PropTypes.node,
};
