import Layout from 'components/common/Layout';
import { graphql } from 'gatsby';

const PostTemplate = ({ data: {} }) => {
  return <Layout>PostTemplate</Layout>;
};

export default PostTemplate;

export const getMarkdownDataBySlug = graphql`
  query getMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
