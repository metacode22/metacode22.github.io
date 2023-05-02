import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ROUTES } from 'utils/constants/routes';

// import DarkModeSwitch from '../DarkModeSwitch';

/**
 * To Do
 * Home, About, DarkModeSwitch 버튼 개발해서 붙이기
 */
const Menu = () => {
  return (
    <Container>
      {/* To Do */}
      {/* <DarkModeSwitch /> */}
      <StyledLink to={ROUTES.HOME}>Home</StyledLink>
      <StyledLink to={ROUTES.POSTS}>Posts</StyledLink>
      {/* <StyledLink to={ROUTES.ABOUT}>About</StyledLink> */}
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
