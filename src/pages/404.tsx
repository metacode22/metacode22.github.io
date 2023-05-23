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
        <h1>페이지를 찾을 수 없습니다. 404 Error.</h1>
        <StyledLink to={ROUTES.HOME}>Home</StyledLink>
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

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
