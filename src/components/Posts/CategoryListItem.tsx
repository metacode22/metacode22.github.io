import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';

type Props = {
  category: string;
  children: ReactNode;
};

const CategoryListItem = ({ category, children }: Props) => {
  return <Container to={`/posts/?category=${category}`}>{children}</Container>;
};

export default CategoryListItem;

const Container = styled(Link)``;
