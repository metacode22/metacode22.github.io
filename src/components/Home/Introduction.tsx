import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';
import IntroductionAvatar from './IntroductionAvatar';

/**
 * To Do
 * 모바일에서는 안 보이게 해버리자. about 페이지가 있으니까.
 * Links 컴포넌트
 */
const Introduction = () => {
  return (
    <Container>
      <IntroductionAvatar />
      <Title></Title>
      <Description></Description>
      {/* <Links /> */}
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${COLORS.SUB};

  display: flex;
`;

const Title = styled.div``;

const Description = styled.div``;
