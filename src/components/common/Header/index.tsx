import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import COLORS from 'utils/constants/colors';

import Logo from './Logo';
import Menu from './Menu';

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container ref={ref} isScrolled={isScrolled}>
      <ContentContainer>
        <ButtonsContainer>
          <Logo />
          <Menu />
        </ButtonsContainer>
        {/* To Do */}
        {/* 검색 기능 구현(post들의 title을 바탕으로 일단 구현해보자 */}
        {/* <SearchBar /> */}
      </ContentContainer>
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
  justify-content: center;
  width: 100%;
  height: ${({ isScrolled }) => (isScrolled ? '3rem' : '4rem')};
  background-color: ${COLORS.WHITE};
  box-shadow: ${({ isScrolled }) =>
    isScrolled && `0px 0px 2px 0 ${COLORS.SHADOW}`};
  transition: all 0.15s ease-out;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 768px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
