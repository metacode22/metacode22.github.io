import styled from '@emotion/styled';
import Layout from 'components/common/Layout';
import NextAndPreviousPostLinks from 'components/PostDetail/NextAndPreviousPostLinks';
import PostBody from 'components/PostDetail/PostBody';
import PostComment from 'components/PostDetail/PostComment';
import PostHeader from 'components/PostDetail/PostHeader';
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
  pageContext: {
    slug: string;
    previousPost?: {
      title: string;
      slug: string;
    };
    nextPost?: {
      title: string;
      slug: string;
    };
  };
};

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
  pageContext: { previousPost, nextPost },
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
      <Container>
        <PostHeader
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
          timeToRead={timeToRead}
        />
        <PostBody ref={contentRef} html={html} />
        <NextAndPreviousPostLinks
          previousPost={previousPost}
          nextPost={nextPost}
        />
        <PostComment />
        <TableOfContents ref={contentRef} tableOfContents={tableOfContents} />
      </Container>
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

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
