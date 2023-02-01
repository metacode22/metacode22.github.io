/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        styles: path.resolve(__dirname, 'src/styles'),
        types: path.resolve(__dirname, 'src/types'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

const { createFilePath } = require('gatsby-source-filesystem');
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    // node라는 필드에 slug 필드를 만들어 넣는다.
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// 이거 해주면 알아서 React 컴포넌트인지 인식한다. 따로 FunctionComponent 등 타입을 넣어줄 필요가 없어진다.
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
