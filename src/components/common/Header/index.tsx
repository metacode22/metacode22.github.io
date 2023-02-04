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
      <SearchBar />
    </Container>
  );
};

export default Header;

const Container = styled.header<{ isScrolled: boolean }>`
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
  height: 3rem;
  box-shadow: ${({ isscrolled }) =>
    isscrolled && `1px 1px 3px 0 ${COLORS.SHADOW}`};
  transition: all 0.15s ease-out;
  background-color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
