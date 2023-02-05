import styled from '@emotion/styled';
import { useMemo } from 'react';
import { PostItem } from 'types/Post';

import PostListItem from './PostListItem';

type Props = {
  posts: PostItem[];
  isFeatured?: boolean;
  selectedCategory?: string;
};

const PostList = ({
  posts,
  isFeatured = false,
  selectedCategory = 'All',
}: Props) => {
  const postListFilteredBySelectedCategory = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostItem) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );
  console.log(posts);

  return (
    <Container>
      {isFeatured && <Title>Featured</Title>}
      <PostsContainer>
        {postListFilteredBySelectedCategory.map(
          ({
            node: {
              timeToRead,
              id,
              fields: { slug },
              frontmatter,
            },
          }) => (
            <PostListItem
              key={id}
              link={slug}
              {...frontmatter}
              isFeatured={isFeatured}
              timeToRead={timeToRead}
            />
          ),
        )}
      </PostsContainer>
    </Container>
  );
};

export default PostList;

/**
 * To Do
 * media, 반응형 디자인 작성
 */
const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1``;

const PostsContainer = styled.div``;
