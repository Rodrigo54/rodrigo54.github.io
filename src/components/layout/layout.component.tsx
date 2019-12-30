import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import React from 'react';

import MenuBar from '../menubar/menubar.component';
import Sidebar from '../sidebar/sidebar.component';
import * as S from './layout.style';

export default function Layout({ children }) {
  return (
    <S.LayoutWrapper>
      <TransitionPortal level='top'>
        <Sidebar />
      </TransitionPortal>
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
