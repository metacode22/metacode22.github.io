import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FaGithub, FaLinkedin, FaRegAddressCard } from 'react-icons/fa';

import StyledReactIconLink from './ReactIconLink';

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
        <IntroductionAvatar image={image} alt='내 얼굴' loading='eager' />
        <InfoContainer>
          <LinksContainer>
            <StyledReactIconLink
              href='https://github.com/metacode22'
              tooltipText='Github'>
              <FaGithub />
            </StyledReactIconLink>
            <StyledReactIconLink
              href='https://www.linkedin.com/in/%EC%8A%B9%EC%A4%80-%EC%8B%A0-73602420a/'
              tooltipText='LinkedIn'>
              <FaLinkedin />
            </StyledReactIconLink>
            <StyledReactIconLink
              href='https://eminent-fork-980.notion.site/571f5d7e751d44e4b9d520716ec24f36'
              tooltipText='이력서'>
              <FaRegAddressCard />
            </StyledReactIconLink>
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

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
