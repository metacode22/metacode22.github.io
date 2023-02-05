import styled from '@emotion/styled';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
};

const ReactIconLink = ({ children, href }: Props) => {
  return (
    <Container href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </Container>
  );
};

export default ReactIconLink;

const Container = styled.a`
  cursor: pointer;
`;