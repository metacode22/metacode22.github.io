import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import COLORS from 'utils/constants/colors';

type Props = {
  title: string;
  date: string;
  categories: string[];
  thumbnail: IGatsbyImageData;
};

/**
 * To Do
 * 제목            |            조회수
 * 카테고리  |  time to read  |  날짜
 *
 * ViewCount 구현 할까 말까...
 */
const PostHead = ({ title, date, categories, thumbnail }: Props) => {
  const categoriesWithOutFeatured = categories.filter(
    category => category !== 'Featured',
  );

  return (
    <Container>
      <Thumbnail image={thumbnail} alt='해당 포스트 썸네일 이미지' />
      <div>
        <Title>{title}</Title>
        {/* <ViewCount></ViewCount> */}
      </div>
      {/* <TimeToRead></TimeToRead> */}
      <CategoriesCreatedAtContainer>
        <Categories>
          {categoriesWithOutFeatured.map(category => (
            <Category key={category}>{category}</Category>
          ))}
        </Categories>
        <CreatedAt>{date}</CreatedAt>
      </CategoriesCreatedAtContainer>
    </Container>
  );
};

export default PostHead;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const CategoriesCreatedAtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const Categories = styled.div``;

const Category = styled.span`
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: ${COLORS.SUB};
  color: ${COLORS.SUB_BOLD};
  font-size: 0.9rem;
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${COLORS.SUB_MIDDLE_BOLD};
  }
`;

const CreatedAt = styled.div``;
