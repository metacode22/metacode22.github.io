import { useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'metacode22/metacode22.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const PostComment = () => {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentRef.current) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      // To Do
      // pathname에서 title로 바꾸기
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterances);
  }, []);

  return <div ref={commentRef} />;
};

export default PostComment;
