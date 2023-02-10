import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ROUTES } from 'utils/constants/routes';

const Logo = () => {
  return <StyledLink to={ROUTES.HOME}>Logo</StyledLink>;
};

export default Logo;

const StyledLink = styled(Link)`
  padding: 0.5rem;
`;
