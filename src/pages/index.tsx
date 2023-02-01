import Layout from 'components/common/Layout';
import Introduction from 'components/Home/Introduction';
import ProjectList from 'components/Home/ProjectList';
import PostList from 'components/Posts/PostList';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostItem } from 'types/Post.types';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: PostItem[];
    };
    file: {
      childImageSharp: { gatsbyImageData: IGatsbyImageData };
      publicURL: string;
    };
  };
};

const Home = ({
  data: {
    allMarkdownRemark: { edges: posts },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: Props) => {
  return (
    <Layout>
      <Introduction image={gatsbyImageData} />
      <PostList posts={posts} />
      <ProjectList />
    </Layout>
  );
};

export default Home;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { frontmatter: { categories: { eq: "featured" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    file(name: { eq: "introduction-avatar-image" }) {
      childImageSharp {
        gatsbyImageData
      }
      publicURL
    }
  }
`;
