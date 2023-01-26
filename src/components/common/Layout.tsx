import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
