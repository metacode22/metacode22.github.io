import styled from '@emotion/styled';
import CategoryList, { CategoryListProps } from 'components/Posts/CategoryList';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';
import { Category } from 'types/Post';

type Props = {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: Category[];
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
          },
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
    </Container>
  );
};

export default Posts;

export const getCategoryList = graphql`
  query getCategoryList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
          }
        }
      }
    }
  }
`;

const Container = styled.main``;
