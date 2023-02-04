import { Link } from 'gatsby';
import { ROUTES } from 'utils/constants/routes';

const Logo = () => {
  return <Link to={ROUTES.HOME}>Logo</Link>;
};

export default Logo;
