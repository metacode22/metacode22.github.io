import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import COLORS from 'utils/constants/colors';

type Props = {
  image: IGatsbyImageData;
};

/**
 * To Do
 * 모바일에서는 안 보이게 해버리자. about 페이지가 있으니까.
 * Links 컴포넌트
 */
const Introduction = ({ image }: Props) => {
  return (
    <Container>
      <ContentContainer>
        <IntroductionAvatar image={image} alt='내 얼굴' />
        <Title>안녕하세요, 메타몽 닮은 개발자입니다.</Title>
        <Description>프론트엔드 개발자 되고 싶습니다. 나름 열심히 하는 중입니다.</Description>
        {/* <Links /> */}
      </ContentContainer>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${COLORS.SUB};

  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroductionAvatar = styled(GatsbyImage)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const Title = styled.h1``;

const Description = styled.div``;
