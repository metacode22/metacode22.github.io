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
    background-color: ${COLORS.SUB};
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
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgb(255 255 255 / 50%);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`;
