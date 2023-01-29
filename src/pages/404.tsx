import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';

const NotFound = () => {
  return (
    <Container>
      <GlobalStyle />
      <h1>Not Found. 404 Error.</h1>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
