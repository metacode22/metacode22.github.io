import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Frontmatter = {
  date: string;
  title: string;
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
  categories: string[];
};

export type PostItem = {
  node: {
    id: string;
    frontmatter: Frontmatter;
  };
};
