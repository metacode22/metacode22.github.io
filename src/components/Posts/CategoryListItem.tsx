import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';
import COLORS from 'utils/constants/colors';
import { QUERIES, ROUTES } from 'utils/constants/routes';

type Props = {
  active?: boolean;
  innerText?: string;
  category: string;
};

type GatsbyLinkProps = {
  to: string;
  active: boolean;
  children: ReactNode;
};

const CategoryListItem = ({ active = false, category, innerText }: Props) => {
  return (
    <StyledLink
      active={active}
      aria-checked={active}
      aria-label={`${innerText || category} 카테고리`}
      to={`${ROUTES.POSTS}/?${QUERIES.CATEGORY}=${encodeURI(category)}`}>
      {innerText || category}
    </StyledLink>
  );
};

export default CategoryListItem;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<{ active: boolean }>`
  z-index: 9;
  display: inline-block;
  margin: 0.25rem 0;
  padding: 0.25rem 0.75rem;
  color: ${COLORS.SUB_BOLD};
  font-size: 0.9rem;
  white-space: nowrap;
  background-color: ${({ active }) =>
    active ? COLORS.SUB_MIDDLE_BOLD : COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY};
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

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
