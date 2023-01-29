import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
