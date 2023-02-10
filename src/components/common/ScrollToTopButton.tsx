import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import COLORS from 'utils/constants/colors';

const INIT_SCROLL_THRESHOLD_HEIGHT = 500;

const ScrollToTopButton = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    const handleShowScrollToTopButton = () => {
      if (window.scrollY > INIT_SCROLL_THRESHOLD_HEIGHT) {
        setIsShow(true);
        return;
      }

      setIsShow(false);
    };

    document.addEventListener('scroll', handleShowScrollToTopButton, {
      passive: true,
    });
    return () => {
      document.removeEventListener('scroll', handleShowScrollToTopButton);
    };
  }, []);

  return (
    <Container onClick={handleClick} isShow={isShow}>
      <StyledFaArrowUp />
    </Container>
  );
};

export default ScrollToTopButton;

const Container = styled.div<{ isShow: boolean }>`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${COLORS.SUB};
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0 ${COLORS.SHADOW};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  cursor: pointer;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: all 0.15s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledFaArrowUp = styled(FaArrowUp)`
  width: 1.5rem;
  height: 1.5rem;
`;
