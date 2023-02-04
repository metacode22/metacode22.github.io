import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';
import COLORS from 'utils/constants/colors';
import { QUERIES, ROUTES } from 'utils/constants/routes';

type Props = {
  category: string;
  children: ReactNode;
};

const CategoryListItem = ({ category, children }: Props) => {
  return (
    <Container
      to={`${ROUTES.POSTS}/?${QUERIES.CATEGORY}=${encodeURI(category)}`}>
      {children}
    </Container>
  );
};

export default CategoryListItem;

const Container = styled(Link)`
  z-index: 9;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: ${COLORS.SUB};
  color: ${COLORS.SUB_BOLD};
  font-size: 0.9rem;
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${COLORS.SUB_MIDDLE_BOLD};
  }
`;
