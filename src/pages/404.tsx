import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ROUTES } from 'utils/constants/routes';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Container>
        <h1>Not Found. 404 Error.</h1>
        <GoHomeButton to={ROUTES.HOME}>Home</GoHomeButton>
      </Container>
    </>
  );
};

export default NotFound;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const GoHomeButton = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
