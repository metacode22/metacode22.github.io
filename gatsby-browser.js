/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import 'assets/styles/global.css';
import 'prismjs/themes/prism-okaidia.css';

// To Do
// Layout 컴포넌트를 통해 seo 처리하기 위해 주석 처리
import Layout from 'components/common/Layout.tsx';

export const wrapPageElement = ({ element, props }) => {
  console.log('-------------element', element);
  console.log('-------------props', props);
  if (element.key === '/404.html') return;
  return <Layout {...props}>{element}</Layout>;
};
