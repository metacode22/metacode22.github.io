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
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        types: path.resolve(__dirname, 'src/types'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};

// 이건 데이터 계층(graphql)이 생겨날 때 서버에서 1번만 실행해서 넣는다고 한다.
// next에서 getStaticProps를 사용할 때 revalide였나? 그거 안 했을 때랑 동일한 경우라고 생각이 된다.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // 모든 slug들을 가지고 온다.
  const allSlugs = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  // 에러 처리
  if (allSlugs.errors) {
    reporter.panicOnBuild('Error while running query');
    return;
  }

  // 해당 slug를 바탕으로 어떤 페이지에 데이터를 넣어 그릴 건지, 템플릿을 가지고 온다.
  const PostTemplate = path.resolve(
    __dirname,
    'src/templates/PostTemplate.tsx',
  );

  // 가져온 slug를 바탕으로 페이지들을 만든다.
  allSlugs.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { slug },
      },
    }) => {
      createPage({
        // 강의에서는 그냥 slug로 해주던데 그러면 구별하기 애매하다고 생각해서 posts를 붙였다.
        // 따라서 포스트로 이동하는 Link에서도 to에 posts를 붙여줬다.
        // slug가 /post-1/ 형태라서 다음과 같이 작성
        path: `/posts${slug}`,
        component: PostTemplate,
        // 이제 PostTemplate에서 graphql로 query를 보낼 때 slug 인자를 사용할 수 있다.
        context: { slug },
      });
    },
  );
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
