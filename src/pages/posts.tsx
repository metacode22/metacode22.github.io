import styled from '@emotion/styled';
import CategoryList, { CategoryListProps } from 'components/Posts/CategoryList';
import PostList from 'components/Posts/PostList';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';
import { PostItem } from 'types/Post';

type Props = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostItem[];
    };
  };
};

const Posts = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
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
    <Container>
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Container>
  );
};

export default Posts;

export const getPostList = graphql`
  query getPostList {
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
  }
`;

const Container = styled.main``;
