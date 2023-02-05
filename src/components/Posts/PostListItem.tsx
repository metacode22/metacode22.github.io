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
  border-radius: 1rem;
  transition: all 0.1s ease-out;
  display: flex;

  &:not(:first-of-type) {
    margin-top: 3rem;
  }
`;

const TextInfoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoriesContainer = styled.div``;

const TitleContainer = styled.h2``;

const Title = styled.span`
  cursor: pointer;
  margin-top: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.div``;

const ThumbnailContainer = styled.div`
  cursor: pointer;
  flex: 1;
`;

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  aspect-ratio: 3 / 2;
`;

const CreatedAtAndTimeToReadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CreatedAt = styled.span``;

const TimeToRead = styled.span``;
