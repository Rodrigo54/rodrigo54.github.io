import React from 'react';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import { Home } from 'styled-icons/boxicons-solid/Home';
import { FormatColorFill as Light } from 'styled-icons/material/FormatColorFill';
import { ThList as List } from 'styled-icons/typicons/ThList';

import getThemeColor from '../../utils/getThemeColor';
import * as S from './menubar.style';

export default function MenuBar() {
  const isListMode = true;
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to='/'
          cover='true'
          direction='right'
          bg={getThemeColor()}
          duration={0.6}
          title='Voltar para Home'
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to='/search/'
          cover='true'
          direction='right'
          bg={getThemeColor()}
          duration={0.6}
          title='Pesquisar'
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title='Mudar o tema'
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title='Mudar visualização'
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title='Ir para o Topo'>
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
}
