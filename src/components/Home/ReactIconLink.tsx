import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isLink?: boolean;
  href?: string;
  tooltipText: string;
};

const StyledReactIconLink = ({
  children,
  isLink = true,
  href = '/',
  tooltipText,
}: Props) => {
  const handleClickLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    !isLink && event.preventDefault();
  };

  return (
    <Container
      href={href}
      onClick={handleClickLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={tooltipText}
      tooltipText={tooltipText}>
      {children}
    </Container>
  );
};

export default StyledReactIconLink;

const Container = styled.a<{ tooltipText: string }>`
  position: relative;
  font-size: 1.25rem;

  /* before는 사각형 툴팁 텍스트 박스, after는 삼각형 화살표 */
  ::before,
  ::after {
    --opacity: 0;
    --arrow-size: 0.25rem;
    --up: 0.5rem;

    position: absolute;
    top: -0.25rem;
    left: 50%;
    transform-origin: bottom center;
    opacity: var(--opacity);
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    content: '';
  }

  ::before {
    width: max-content;
    padding: 0.5rem;
    color: white;
    font-size: 0.75rem;
    text-align: center;
    background: #333333;
    border-radius: 0.3rem;
    transform: translateX(-50%) translateY(calc(-100% - var(--arrow-size)));
    content: ${({ tooltipText }) => `'${tooltipText}'`};
  }

  ::after {
    --translate-y: calc(-1 * var(--arrow-size));
    border: var(--arrow-size) solid transparent;
    border-top-color: #333333;
    transform: translateX(-50%) translateY(calc(-1 * var(--arrow-size)));
    transform-origin: top center;
    content: '';
  }

  :hover::before,
  :hover::after {
    --opacity: 1;
    --up: 0;
  }
`;
