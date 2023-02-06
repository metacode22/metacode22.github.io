import styled from '@emotion/styled';

type Props = {
  tableOfContents: string;
};

const TableOfContents = ({ tableOfContents }: Props) => {
  return (
    <Container>
      <TableOfContentsRenderer
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
    </Container>
  );
};

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
