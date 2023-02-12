import styled from '@emotion/styled';
import { ForwardedRef, forwardRef } from 'react';
import COLORS from 'utils/constants/colors';

const PostContent = forwardRef(
  ({ html }: { html: string }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <MarkdownRenderer ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    );
  },
);

export default PostContent;

const MarkdownRenderer = styled.div`
  /* Renderer Style */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;

  /* Markdown Style */
  line-height: 1.5;
  word-break: break-all;

  /* Adjust Heading Element Style */
  h1,
  h2,
  h3 {
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  h1 {
    padding-left: 0.2rem;
    font-size: 2rem;
    border-bottom: 1px solid ${COLORS.GRAY};
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 3rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  /* Adjust Quotation Element Style */
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    font-weight: 800;
    border-left: 2px solid #000;
  }

  /* Adjust List Element Style */
  ol,
  ul {
    margin-left: 1rem;
    padding: 1rem 0;
  }

  /* Adjust Horizontal Rule style */
  hr {
    margin: 100px 0;
    border: 1px solid #000;
  }

  /* Adjust Link Element Style */
  a {
    color: ${COLORS.SUB_BOLD};
    text-decoration: underline;
  }

  p {
    margin: 0;
    padding: 0.25rem;
  }

  /* Adjust Code Style */
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-weight: 400;
    font-size: 15px;
    background-color: #192427;

    code {
      background-color: transparent;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Menlo, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    tab-size: 2;
  }
`;
