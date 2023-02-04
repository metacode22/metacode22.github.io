import styled from '@emotion/styled';
import CategoryListItem from 'components/Posts/CategoryListItem';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

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
          {categories.map(category => (
            <CategoryListItem category={category} key={category}>
              {category}
            </CategoryListItem>
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

const CreatedAt = styled.div``;
