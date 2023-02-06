import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';

const Footer = () => {
  return (
    <Container>© 2023 Developer Shin Seung Jun, Powered By Gatsby.</Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-top: 8rem;
  color: ${COLORS.SUB_BOLD};
  background-color: ${COLORS.SUB};
`;
