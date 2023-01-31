import Layout from 'components/common/Layout';
import Introduction from 'components/Home/Introduction';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
};

export default Home;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
            summary
            thumbnail {
              publicURL
            }
            categories
          }
        }
      }
    }
  }
`;
