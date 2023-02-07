import styled from '@emotion/styled';
import { ForwardedRef, forwardRef, useEffect } from 'react';

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
  left: 900px;
  height: 100%;
`;

const TableOfContentsRenderer = styled.nav`
  position: sticky;
  top: 6rem;
  width: 200px;
  word-break: keep-all;
`;
