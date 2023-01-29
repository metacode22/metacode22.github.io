import styled from '@emotion/styled';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';

/**
 * To Do
 * Logo - SearchBar - Home/About/DarkModeSwitch
 */
const Header = () => {
  return (
    <Container>
      <ButtonsContainer>
        <Logo />
        <Menu />
      </ButtonsContainer>
      <SearchBar />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 3rem;
  border: 1px solid;

  display: flex;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
