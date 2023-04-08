import Layout from 'components/common/Layout';
import Introduction from 'components/Home/Introduction';
import PostList from 'components/Posts/PostList';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostItem } from 'types/Post';

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
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
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges: posts },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: Props) => {
  return (
    <Layout
      title='Home'
      description={description}
      url={siteUrl}
      image={publicURL}>
      <Introduction image={gatsbyImageData} />
      <PostList posts={posts} isFeatured />
    </Layout>
  );
};

export default Home;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { frontmatter: { categories: { eq: "Featured" } } }
    ) {
      edges {
        node {
          timeToRead
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
              publicURL
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
