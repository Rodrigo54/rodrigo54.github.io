import getThemeColor from '@utils/getThemeColor';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

import * as S from './menu-links.style';

export default function MenuLinks() {
  const links = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Sobre Mim',
      url: '/about/',
    },
  ];

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              cover={true}
              direction='left'
              bg={getThemeColor()}
              to={link.url}
              activeClassName='active'
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
}
