import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
      <ScrollToTopButton />
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

/**
 * To Do
 * media, 반응형 디자인 작성
 */
const ContentContainer = styled.main``;
