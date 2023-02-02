import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';

const Footer = () => {
  return (
    <Container>© 2023 Developer Shin Seung Jun, Powered By Gatsby.</Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin-top: 8rem;
  width: 100%;
  height: 3rem;
  background-color: ${COLORS.SUB};
  color: ${COLORS.SUB_BOLD};

  display: flex;
  align-items: center;
  justify-content: center;
`;
