import getThemeColor from '@utils/getThemeColor';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Avatar from '../avatar/avatar.component';
import * as S from './profile.style';

export default function Profile() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `,
  );
  const { title, position, description } = site.siteMetadata;
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to='/'
        cover={true}
        direction='left'
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
}
