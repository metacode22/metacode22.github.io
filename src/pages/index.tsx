import Layout from 'components/common/Layout';
import Introduction from 'components/Home/Introduction';
import PostList from 'components/Posts/PostList';
import { graphql } from 'gatsby';
import { PostItem } from 'types/Post.types';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: PostItem[];
    };
  };
};

const Home = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}: Props) => {
  return (
    <Layout>
      <Introduction />
      <PostList posts={posts} />
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
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768)
              }
            }
          }
        }
      }
    }
  }
`;
