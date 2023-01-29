import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <Container>
      <h1>Not Found. 404 Error.</h1>
      <GoHomeButton to='/'>Home</GoHomeButton>
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

const GoHomeButton = styled(Link)``;
