import React from 'react';
import Profile from '../profile/profile.component';
import SocialLinks from '../social-links/social-links.component';

import * as S from './sidebar.style';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
