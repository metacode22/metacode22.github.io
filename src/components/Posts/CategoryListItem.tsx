import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';
import COLORS from 'utils/constants/colors';
import { QUERIES, ROUTES } from 'utils/constants/routes';

type Props = {
  active?: boolean;
  category: string;
  children: ReactNode;
};

type GatsbyLinkProps = {
  to: string;
  active: boolean;
  children: ReactNode;
};

const CategoryListItem = ({ active = false, category, children }: Props) => {
  return (
    <Container
      active={active}
      to={`${ROUTES.POSTS}/?${QUERIES.CATEGORY}=${encodeURI(category)}`}>
      {children}
    </Container>
  );
};

export default CategoryListItem;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Container = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<{ active: boolean }>`
  z-index: 9;
  display: inline-block;
  padding: 0.35rem 0.75rem;
  color: ${COLORS.SUB_BOLD};
  font-size: 0.9rem;
  background-color: ${({ active }) =>
    active ? COLORS.SUB_MIDDLE_BOLD : COLORS.SUB};
  border-radius: 1rem;
  transform: scale(${({ active }) => (active ? 1.15 : 1)});
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  &:hover {
    color: ${COLORS.SUB_BOLD};
    background-color: ${COLORS.SUB_MIDDLE_BOLD};
  }
`;
