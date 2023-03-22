import styled from '@emotion/styled';
import { Link } from 'gatsby';
import COLORS from 'utils/constants/colors';
import { ROUTES } from 'utils/constants/routes';

const Logo = () => {
  return <StyledLink to={ROUTES.HOME}>Seung - Jun</StyledLink>;
};

export default Logo;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  color: ${COLORS.BLACK};
  font-size: large;
  font-style: italic;
  background-color: ${COLORS.SUB};
  border-radius: 4rem;
`;
