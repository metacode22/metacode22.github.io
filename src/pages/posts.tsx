import styled from '@emotion/styled';
import Layout from 'components/common/Layout';
import CategoryList, { CategoryListProps } from 'components/Posts/CategoryList';
import PostList from 'components/Posts/PostList';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';
import { PostItem } from 'types/Post';

type Props = {
  location: {
    search: string;
    href: string;
  };
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
      publicURL: string;
    };
  };
};

const Posts = ({
  location: { search, href },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: { publicURL },
  },
}: Props) => {
  const parsedQueries: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory =
    typeof parsedQueries.category !== 'string' || !parsedQueries.category
      ? 'All'
      : parsedQueries.category;
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostItem,
        ) => {
          categories.forEach(category => {
            list[category] ??= 0;
            list[category] += 1;
          });

          list['All'] += 1;

          return list;
        },
        {
          All: 0,
        },
      ),
    [],
  );

  return (
    <Layout
      title={title}
      description={description}
      url={href}
      image={publicURL}>
      <Container>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </Container>
    </Layout>
  );
};

export default Posts;

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
      publicURL
    }
  }
`;

const Container = styled.div``;
