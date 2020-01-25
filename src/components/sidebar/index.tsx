import React from 'react';

import MenuLinks from '../menu-links';
import Profile from '../profile';
import SocialLinks from '../social-links';
import * as S from './styles';

const Sidebar: React.FC = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
