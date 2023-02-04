import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { QUERIES, ROUTES } from 'utils/constants/routes';

type Props = {
  category: string;
  children: ReactNode;
};

const CategoryListItem = ({ category, children }: Props) => {
  return (
    <Container to={`${ROUTES.POSTS}/?${QUERIES.CATEGORY}=${category}`}>
      {children}
    </Container>
  );
};

export default CategoryListItem;

const Container = styled(Link)``;
