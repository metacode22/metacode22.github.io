import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ROUTES } from 'utils/constants/routes';

const Menu = () => {
  return (
    <Container>
      {/* To Do */}
      {/* <DarkModeSwitch /> */}
      <StyledLink to={ROUTES.HOME}>Home</StyledLink>
      <StyledLink to={ROUTES.POSTS}>Posts</StyledLink>
      <StyledLink to={ROUTES.ABOUT}>About</StyledLink>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
