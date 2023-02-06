import styled from '@emotion/styled';
import { ForwardedRef, forwardRef } from 'react';

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
  padding: 100px 0;
  font-weight: 400;
  font-size: 16px;

  /* Markdown Style */
  line-height: 1.8;
  word-break: break-all;

  /* Apply Padding Attribute to All Elements */
  p {
    padding: 3px 0;
  }

  /* Adjust Heading Element Style */
  h1,
  h2,
  h3 {
    margin-bottom: 30px;
    font-weight: 700;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
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
    margin-left: 20px;
    padding: 30px 0;
  }

  /* Adjust Horizontal Rule style */
  hr {
    margin: 100px 0;
    border: 1px solid #000;
  }

  /* Adjust Link Element Style */
  a {
    color: #4263eb;
    text-decoration: underline;
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
