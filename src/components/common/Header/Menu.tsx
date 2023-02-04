import styled from '@emotion/styled';
import { Link } from 'gatsby';

import DarkModeSwitch from '../DarkModeSwitch';

/**
 * To Do
 * Home, About, DarkModeSwitch 버튼 개발해서 붙이기
 */
const Menu = () => {
  return (
    <Container>
      <DarkModeSwitch />
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
