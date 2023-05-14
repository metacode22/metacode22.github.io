import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostItem } from 'types/Post';
import { ROUTES } from 'utils/constants/routes';

import PostListItem from './PostListItem';

type Props = {
  posts: PostItem[];
  isFeatured?: boolean;
  selectedCategory?: string;
};

const isEager = (order: number) => order < 3;

const PostList = ({
  posts,
  isFeatured = false,
  selectedCategory = 'All',
}: Props) => {
  const postListFilteredBySelectedCategory = posts.filter(
    ({
      node: {
        frontmatter: { categories },
      },
    }: PostItem) =>
      selectedCategory !== 'All' ? categories.includes(selectedCategory) : true,
  );

  return (
    <Container>
      {isFeatured && (
        <PostListHeaderContainer>
          <Title>Featured</Title>
          <StyledLink to={ROUTES.POSTS}>다른 글 구경하기</StyledLink>
        </PostListHeaderContainer>
      )}
      <PostListContainer>
        {postListFilteredBySelectedCategory.map(
          (
            {
              node: {
                timeToRead,
                id,
                fields: { slug },
                frontmatter,
              },
            },
            index,
          ) => (
            <PostListItem
              eager={isEager(index)}
              key={id}
              link={slug}
              {...frontmatter}
              isFeatured={isFeatured}
              timeToRead={timeToRead}
            />
          ),
        )}
      </PostListContainer>
    </Container>
  );
};

export default PostList;

/**
 * To Do
 * media, 반응형 디자인 작성
 */
const Container = styled.div``;

const Title = styled.h2``;

const PostListContainer = styled.div``;

const PostListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
