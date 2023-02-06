import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Frontmatter } from 'types/Post';

import CategoryListItem from './CategoryListItem';

type Props = Frontmatter & {
  link: string;
  isFeatured: boolean;
  timeToRead: number;
};

const PostListItem = ({
  categories,
  date,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  title,
  link,
  isFeatured,
  timeToRead,
}: Props) => {
  const handleClick = () => {
    navigate(link);
  };

  return (
    <Container>
      <TextInfoContainer>
        <CategoriesContainer>
          {categories
            .filter(category => (isFeatured ? category !== 'Featured' : true))
            .map(category => (
              <CategoryListItem key={category} category={category}>
                {category}
              </CategoryListItem>
            ))}
        </CategoriesContainer>
        <TitleContainer>
          <Title onClick={handleClick}>{title}</Title>
        </TitleContainer>
        <Description>{summary}</Description>
        <CreatedAtAndTimeToReadContainer>
          <CreatedAt>{date}</CreatedAt>
          <TimeToRead>{timeToRead} min read</TimeToRead>
        </CreatedAtAndTimeToReadContainer>
      </TextInfoContainer>
      <ThumbnailContainer onClick={handleClick}>
        <Thumbnail image={gatsbyImageData} alt='해당 포스트 썸네일 이미지' />
      </ThumbnailContainer>
    </Container>
  );
};

export default PostListItem;

const Container = styled.div`
  display: flex;
  border-radius: 1rem;
  transition: all 0.1s ease-out;

  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoriesContainer = styled.div``;

const TitleContainer = styled.h2``;

const Title = styled.span`
  margin-top: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.div``;

const ThumbnailContainer = styled.div`
  flex: 1;
  cursor: pointer;
`;

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  aspect-ratio: 3 / 2;
`;

const CreatedAtAndTimeToReadContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CreatedAt = styled.span``;

const TimeToRead = styled.span``;
