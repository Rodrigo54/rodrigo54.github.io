import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  color: var(--color1-contrast);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: var(--color1-contrast);
  text-decoration: none;
  transition: color 0.5s;
  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
  &:hover {
    color: var(--color3-light);
  }
`;

export const ProfileAuthor = styled.h1`
  font-family: var(--font-serif);
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-family: var(--font-sans-serif);
  font-size: 1.2rem;
  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`;

export const ProfileDescription = styled.p`
  font-family: var(--font-sans-serif);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  ${media.lessThan('large')`
    display: none;
  `}
`;