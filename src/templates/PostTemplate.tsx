import styled from '@emotion/styled';
import PostComment from 'components/PostDetail/PostComment';
import PostContent from 'components/PostDetail/PostContent';
import PostHead from 'components/PostDetail/PostHead';
import TableOfContents from 'components/PostDetail/TableOfContents';
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
      tableOfContents,
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
    <ContainerWithTableOfContents>
      <Container>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
          timeToRead={timeToRead}
        />
        <PostContent html={html} />
        <PostComment />
      </Container>
      <TableOfContents tableOfContents={tableOfContents} />
    </ContainerWithTableOfContents>
  );
};

export default PostTemplate;

export const getMarkdownDataBySlug = graphql`
  query getMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          tableOfContents
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

const ContainerWithTableOfContents = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
`;
