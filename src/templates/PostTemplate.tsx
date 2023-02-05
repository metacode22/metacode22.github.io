import styled from '@emotion/styled';
import PostContent from 'components/PostDetail/PostContent';
import PostHead from 'components/PostDetail/PostHead';
import { graphql } from 'gatsby';
import { PostDetail } from 'types/Post';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: PostDetail[];
    };
  };
};

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: Props) => {
  const {
    node: {
      timeToRead,
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];
  return (
    <Container>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
        timeToRead={timeToRead}
      />
      <PostContent html={html} />
    </Container>
  );
};

export default PostTemplate;

export const getMarkdownDataBySlug = graphql`
  query getMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          timeToRead
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

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
