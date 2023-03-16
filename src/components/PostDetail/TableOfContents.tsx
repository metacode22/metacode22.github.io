import styled from '@emotion/styled';
import { ForwardedRef, forwardRef, useEffect } from 'react';
import COLORS from 'utils/constants/colors';

type Props = {
  tableOfContents: string;
};

const TableOfContents = forwardRef(
  ({ tableOfContents }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    // To Do
    // intersection observer 등을 활용해 해당 태그가 보이면 목차의 백그라운드 색깔도 바꾸기.
    useEffect(() => {
      if (typeof ref !== 'function') {
        // console.log(ref?.current?.querySelectorAll('h1, h2, h3'));
      }
    }, []);

    return (
      <Container>
        <TableOfContentsRenderer
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </Container>
    );
  },
);

export default TableOfContents;

const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 768px;
  height: 100%;
  padding-left: 4rem;
`;

const TableOfContentsRenderer = styled.nav`
  position: sticky;
  top: 6rem;
  width: 240px;
  font-size: 0.8rem;
  word-break: keep-all;

  p {
    margin: 0;
  }

  a {
    display: block;
    padding: 0.75rem 0 0.75rem 0.75rem;
    border-radius: 4px;
    transition: all 0.1s ease-out;

    &:hover {
      background-color: ${COLORS.SUB_MIDDLE_BOLD};
    }
  }

  ul {
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    list-style: none;

    border-left: 2px solid ${COLORS.GRAY};
  }
`;
