import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as S from './styles';

const Avatar: React.FC = () => {
  const { avatarImg } = useStaticQuery(
    graphql`
      query {
        avatarImg: file(relativePath: { eq: "profile-self.jpg" }){
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );
  return <S.AvatarWrapper fluid={avatarImg.childImageSharp.fluid} />;
}

export default Avatar;
