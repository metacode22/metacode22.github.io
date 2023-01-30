import styled from '@emotion/styled';
import COLORS from 'utils/constants/colors';

/**
 * To Do
 * 모바일에서는 안 보이게 해버리자. about 페이지가 있으니까.
 */
const Introduction = () => {
  return <Container>
    <div>아바타</div>
    <div>description</div>
    <div>링크드인, 벨로그, 깃헙, 지메일</div>
  </Container>;
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${COLORS.SUB};

  display: flex;
`;
