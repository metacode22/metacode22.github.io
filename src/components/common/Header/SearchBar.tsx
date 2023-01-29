import styled from '@emotion/styled';

/**
 * To Do
 * 검색 기능 개발
 */
const SearchBar = () => {
  return <Input disabled />;
};

export default SearchBar;

/**
 * To Do
 * 모바일 화면에서는 없어지도록
 * ScrollToTopButton처럼 해두는 것이 좋지 않을까?
 * 클릭 시 검색바가 펼쳐지게 하면 좋겠다.
 */
const Input = styled.input`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
