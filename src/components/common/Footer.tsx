import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';

const Footer = () => {
  return <Container>© 2022 Developer Jun, Powered By Gatsby.</Container>;
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: ${COLORS.SUB};
`;
