/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyles from '../../styles/global';
import MenuBar from '../menubar/menubar.component';
import Sidebar from '../sidebar/sidebar.component';
import * as S from './layout.style';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <TransitionPortal level='top'>
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
