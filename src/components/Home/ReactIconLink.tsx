import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
  ariaLabel: string;
};

const ReactIconLink = ({ children, href, ariaLabel }: Props) => {
  return (
    <Container
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={ariaLabel}>
      {children}
    </Container>
  );
};

export default ReactIconLink;

const Container = styled.a`
  font-size: 1.25rem;
  cursor: pointer;
`;
