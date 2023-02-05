import styled from '@emotion/styled';

import CategoryListItem from './CategoryListItem';

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <Container>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryListItem
          active={selectedCategory === name}
          category={name}
          key={name}>
          {name} {count}
        </CategoryListItem>
      ))}
    </Container>
  );
};

export default CategoryList;

const Container = styled.nav`
  margin: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;