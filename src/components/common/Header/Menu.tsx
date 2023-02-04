import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ROUTES from 'utils/constants/routes';

import DarkModeSwitch from '../DarkModeSwitch';

/**
 * To Do
 * Home, About, DarkModeSwitch 버튼 개발해서 붙이기
 */
const Menu = () => {
  return (
    <Container>
      <DarkModeSwitch />
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.POSTS}>Posts</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
