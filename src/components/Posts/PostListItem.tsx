import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Frontmatter } from 'types/Post.types';
import COLORS from 'utils/constants/colors';

type Props = Frontmatter & { link: string };

const PostListItem = ({
  categories,
  date,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  title,
  link
}: Props) => {
  return (
    <Container to={link}>
      <TextInfoContainer>
        <CategoriesContainer>
          {categories
            .filter(category => category !== 'featured')
            .map(category => (
              <Category key={category}>{category}</Category>
            ))}
        </CategoriesContainer>
        <Title>{title}</Title>
        <Description>{summary}</Description>
        <CreatedAt>{date}</CreatedAt>
      </TextInfoContainer>
      <Thumbnail image={gatsbyImageData} alt='해당 포스트 썸네일 이미지' />
    </Container>
  );
};

export default PostListItem;

const Container = styled(Link)`
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-out;

  display: flex;

  &:hover {
    background-color: ${COLORS.GRAY};
  }

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

const TextInfoContainer = styled.div`
  flex: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoriesContainer = styled.div``;

const Category = styled.div`
  display: inline-block;
  padding: 0.2rem 0.25rem 0;
  border: 1px solid;
  border-radius: 1rem;

  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Description = styled.div``;

const Thumbnail = styled(GatsbyImage)`
  flex: 1;
  width: 100%;
  aspect-ratio: 3 / 2;
`;

const CreatedAt = styled.div``;
