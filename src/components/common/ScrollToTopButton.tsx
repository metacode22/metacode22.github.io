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

    document.addEventListener('scroll', handleShowScrollToTopButton);
    return () => {
      document.removeEventListener('scroll', handleShowScrollToTopButton);
    };
  }, []);

  return <Container onClick={handleClick} isShow={isShow} />;
};

export default ScrollToTopButton;

const Container = styled(FaArrowUp)<{ isShow: boolean }>`
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: ${COLORS.SUB};
  border-radius: 50%;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  transition: all 0.2s ease-out;
`;
