import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const styles = css`
  ${emotionNormalize}
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
