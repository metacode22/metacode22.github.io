import styled from '@emotion/styled';
import { ForwardedRef, forwardRef } from 'react';
import COLORS from 'utils/constants/colors';

const PostBody = forwardRef(
  ({ html }: { html: string }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <MarkdownRenderer ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    );
  },
);

export default PostBody;

const MarkdownRenderer = styled.div`
  /* Renderer Style */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;

  /* Markdown Style */
  line-height: 1.75;
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
    border-bottom: 1px solid ${COLORS.GRAY};
  }

  h3 {
    font-size: 1.25rem;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  /* Adjust Quotation Element Style */
  blockquote {
    margin: 30px 0;
    padding: 0 1rem;
    color: ${COLORS.GRAY_BOLD};
    font-weight: 800;
    border-left: 2px solid ${COLORS.GRAY};
  }

  /* Adjust List Element Style */
  ol,
  ul {
    margin-left: 1rem;
    padding: 1rem 0;
  }

  li {
    font-weight: 300;
  }

  /* Adjust Horizontal Rule style */
  hr {
    margin: 100px 0;
    border: 1px solid #000;
  }

  /* Adjust Link Element Style */
  a {
    color: ${COLORS.SUB_BOLD};
    /* text-decoration: underline; */
  }

  p {
    margin: 0;
    padding: 0.5rem 0;
    font-weight: 300;
  }

  img {
    margin: 3rem 0;
  }

  /* Code Block Highlighting */
  pre[class*='language-'],
  code[class*='language-'] {
    color: #d4d4d4;
    font-size: 13px;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace;
    direction: ltr;
    white-space: pre;
    text-align: left;
    text-shadow: none;
    word-break: normal;
    word-spacing: normal;
    tab-size: 4;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  pre[class*='language-'] *::selection,
  code[class*='language-'] *::selection {
    text-shadow: none;
    background: #264f78;
  }

  @media print {
    pre[class*='language-'],
    code[class*='language-'] {
      text-shadow: none;
    }
  }

  pre[class*='language-'] {
    padding: 1rem;
    overflow: auto;
    background: #1e1e1e;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    background: #1e1e1e;
    border-radius: 0;
    border-radius: 0.3em;
  }
  /****************0*****************************************
* Tokens
*/
  .namespace {
    opacity: 0.7;
  }

  .token.doctype .token.doctype-tag {
    color: #569cd6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569cd6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569cd6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }
  /*********************************************************
* Language Specific
*/

  pre[class*='language-javascript'],
  code[class*='language-javascript'],
  pre[class*='language-jsx'],
  code[class*='language-jsx'],
  pre[class*='language-typescript'],
  code[class*='language-typescript'],
  pre[class*='language-tsx'],
  code[class*='language-tsx'] {
    color: #9cdcfe;
  }

  pre[class*='language-css'],
  code[class*='language-css'] {
    color: #ce9178;
  }

  pre[class*='language-html'],
  code[class*='language-html'] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }
  /*********************************************************
* Line highlighting
*/
  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }

  .line-highlight.line-highlight {
    z-index: 0;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
  }

  pre[class*='language-text'],
  code[class*='language-text'] {
    padding: 0.25rem;
    color: ${COLORS.BLACK};
    background-color: ${COLORS.GRAY};
    border-radius: 0.25rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;

    img {
      width: 100%;
    }

    pre[class*='language-'] {
      width: 100%;
      overflow-x: auto;
    }
  }
`;
