import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';

interface Props {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}

const Layout = ({ title, description, url, image, children }: Props) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content={title} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:site' content='@seungjun' />
        <meta name='twitter:creator' content='@seungjun' />
      </Helmet>
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
