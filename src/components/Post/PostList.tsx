import styled from '@emotion/styled';
import { PostItem } from 'types/Post.types';

import PostListItem from './PostListItem';

type Props = {
  posts: PostItem[];
};

const PostList = ({ posts }: Props) => {
  return (
    <Container>
      <Title>Featured</Title>
      <PostsContainer>
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }) => (
            <PostListItem key={id} link={slug} {...frontmatter} />
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
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1``;

const PostsContainer = styled.div``;
