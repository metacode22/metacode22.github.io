import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import COLORS from 'utils/constants/colors';

import ReactIconLink from './ReactIconLink';

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
        <InfoContainer>
          <Title>안녕하세요, 메타몽 닮은 개발자입니다.</Title>
          <Description>
            프론트엔드 개발자 되고 싶습니다. 나름 열심히 하는 중입니다.
          </Description>
          <LinksContainer>
            <ReactIconLink
              href='https://github.com/metacode22'
              ariaLabel='Github'>
              <FaGithub />
            </ReactIconLink>
            <ReactIconLink
              href='https://www.linkedin.com/in/%EC%8A%B9%EC%A4%80-%EC%8B%A0-73602420a/'
              ariaLabel='LinkedIn'>
              <FaLinkedin />
            </ReactIconLink>
          </LinksContainer>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20rem;
  background-color: ${COLORS.SUB};
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const IntroductionAvatar = styled(GatsbyImage)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.p``;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
