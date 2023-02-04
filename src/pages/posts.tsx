import styled from '@emotion/styled';
import CategoryList from 'components/Posts/CategoryList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Posts = () => {
  return (
    <Container>
      <CategoryList selectedCategory='Web' categoryList={CATEGORY_LIST} />
    </Container>
  );
};

export default Posts;

const Container = styled.main``;
