import styled from '@emotion/styled';
import Layout from 'components/common/Layout';
import PostComment from 'components/PostDetail/PostComment';
import PostContent from 'components/PostDetail/PostContent';
import PostHead from 'components/PostDetail/PostHead';
import TableOfContents from 'components/PostDetail/TableOfContents';
import { graphql } from 'gatsby';
import { useRef } from 'react';
import { PostDetail } from 'types/Post';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: PostDetail[];
    };
  };
  location: {
    href: string;
  };
};

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
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
    <Layout title={title} description={summary} url={href} image={publicURL}>
      <ContainerWithTableOfContents>
        <Container>
          <PostHead
            title={title}
            date={date}
            categories={categories}
            thumbnail={gatsbyImageData}
            timeToRead={timeToRead}
          />
          <PostContent ref={contentRef} html={html} />
          <PostComment />
        </Container>
        <TableOfContents ref={contentRef} tableOfContents={tableOfContents} />
      </ContainerWithTableOfContents>
    </Layout>
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
