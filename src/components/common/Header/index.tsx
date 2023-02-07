import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import COLORS from 'utils/constants/colors';

import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';

/**
 * To Do
 * Logo - SearchBar - Home/About/DarkModeSwitch
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        ref.current &&
        window.scrollY > ref.current?.getBoundingClientRect().height
      ) {
        setIsScrolled(true);
        return;
      }

      setIsScrolled(false);
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container ref={ref} isScrolled={isScrolled}>
      <ButtonsContainer>
        <Logo />
        <Menu />
      </ButtonsContainer>
      {/* To Do */}
      {/* 검색 기능 구현(post들의 title을 바탕으로 일단 구현해보자 */}
      {/* <SearchBar /> */}
    </Container>
  );
};

export default Header;

const Container = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: ${COLORS.WHITE};
  box-shadow: ${({ isScrolled }) =>
    isScrolled && `1px 1px 3px 0 ${COLORS.SHADOW}`};
  transition: all 0.15s ease-out;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
