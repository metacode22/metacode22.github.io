/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import 'assets/styles/global.css';
import 'prismjs/themes/prism-okaidia.css';

import Layout from 'components/common/Layout.tsx';
import { makeMetadata } from 'utils/helpers.ts';

export const wrapPageElement = ({ element, props }) => {
  const { title, description, url, image } = makeMetadata(props);
  

  if (element.key === '/404.html') return;
  return (
    <Layout
      title={title}
      description={description}
      url={url}
      image={image}
      {...props}>
      {element}
    </Layout>
  );
};
