import styled from '@emotion/styled';
import CategoryListItem from 'components/Posts/CategoryListItem';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import COLORS from 'utils/constants/colors';
import { adjustTimeToReadByRatio } from 'utils/timeToRead';

type Props = {
  title: string;
  date: string;
  categories: string[];
  thumbnail: IGatsbyImageData;
  timeToRead: number;
};

const PostHeader = ({
  title,
  date,
  categories,
  thumbnail,
  timeToRead,
}: Props) => {
  return (
    <Container>
      <Thumbnail image={thumbnail} alt='해당 포스트 썸네일 이미지' />
      <div>
        <Title>{title}</Title>
        {/* <ViewCount></ViewCount> */}
      </div>
      <CategoriesCreatedAtContainer>
        <CategoriesAndTimeToReadContainer>
          {categories.map(category => (
            <CategoryListItem category={category} key={category} />
          ))}
          <TimeToRead>약 {adjustTimeToReadByRatio(timeToRead)}분</TimeToRead>
        </CategoriesAndTimeToReadContainer>
        <CreatedAt>{date}</CreatedAt>
      </CategoriesCreatedAtContainer>
    </Container>
  );
};

export default PostHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  max-width: 768px;
  margin: 4rem auto;
`;

const CategoriesCreatedAtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.GRAY_BOLD};
`;

const Title = styled.h1`
  word-break: keep-all;
`;

const CategoriesAndTimeToReadContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TimeToRead = styled.div`
  margin-left: 1rem;
`;

const CreatedAt = styled.div``;
