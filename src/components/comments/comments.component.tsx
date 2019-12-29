import PropTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './comments.style';

export default function Comments({ url, title, identifier }) {
  const completeURL = `https://rodrigoalves.me/blog${url}`;
  const disqusShortname = 'rodrigo-io';

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={`${identifier}`}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  identifier: PropTypes.number.isRequired,
};
