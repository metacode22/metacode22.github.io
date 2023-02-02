/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import 'assets/styles/global.css';
import 'prismjs/themes/prism.css';
import Layout from 'components/common/Layout.tsx';

export const wrapPageElement = ({ element, props }) => {
  if (element.key === '/404.html') return;
  return <Layout {...props}>{element}</Layout>;
};
