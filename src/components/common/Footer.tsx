import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';

const Footer = () => {
  return <Container>© 2023 신승준, Powered by Gatsby.</Container>;
};

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  margin-top: auto;
  color: ${COLORS.SUB_BOLD};
  font-size: 0.75rem;
  background-color: ${COLORS.SUB};
`;
