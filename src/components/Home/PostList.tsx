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
        {posts.map(({ node: { id, frontmatter } }) => (
          <PostListItem key={id} {...frontmatter} />
        ))}
      </PostsContainer>
    </Container>
  );
};

export default PostList;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  padding-left: 1rem;
`;

const PostsContainer = styled.div``;
