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
          innerText={`${name} ${count}`}
          category={name}
          key={name}
        />
      ))}
    </Container>
  );
};

export default CategoryList;

const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 4rem;
`;
