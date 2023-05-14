import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Frontmatter } from 'types/Post';
import COLORS from 'utils/constants/colors';
import { adjustTimeToReadByRatio } from 'utils/timeToRead';

import CategoryListItem from './CategoryListItem';

type Props = Frontmatter & {
  link: string;
  isFeatured: boolean;
  timeToRead: number;
  eager: boolean;
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
  eager,
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
              <CategoryListItem key={category} category={category} />
            ))}
        </CategoriesContainer>
        <Title onClick={handleClick}>{title}</Title>
        <Description>{summary}</Description>
        <CreatedAtAndTimeToReadContainer>
          <CreatedAt>{date}</CreatedAt>
          <TimeToRead>약 {adjustTimeToReadByRatio(timeToRead)}분</TimeToRead>
        </CreatedAtAndTimeToReadContainer>
      </TextInfoContainer>
      <ThumbnailContainer onClick={handleClick}>
        <Thumbnail
          loading={eager ? 'eager' : 'lazy'}
          image={gatsbyImageData}
          role='link'
          alt='썸네일 이미지, 누르면 해당 글로 이동'
          onClick={handleClick}
        />
      </ThumbnailContainer>
    </Container>
  );
};

export default PostListItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${COLORS.GRAY_BOLD};
  transition: all 0.1s ease-out;

  &:first-of-type {
    border-top: 1px solid ${COLORS.GRAY_BOLD};
  }
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 200px);
  padding-right: 1rem;
`;

const CategoriesContainer = styled.div``;

const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.div`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  color: ${COLORS.GRAY_BOLD};
  text-overflow: ellipsis;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const Thumbnail = styled(GatsbyImage)`
  height: 100%;
  cursor: pointer;
`;

const CreatedAtAndTimeToReadContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
  color: ${COLORS.GRAY_BOLD};
`;

const CreatedAt = styled.span`
  font-size: 14px;
  white-space: nowrap;
`;

const TimeToRead = styled.span`
  font-size: 14px;
  white-space: nowrap;
`;
