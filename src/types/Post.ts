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
    fields: {
      slug: string;
    };
    frontmatter: Frontmatter;
  };
};

export type PostDetail = {
  node: {
    html: string;
    frontmatter: Frontmatter;
  };
};

export type Category = {
  node: {
    frontmatter: {
      categories: string[];
    };
  };
};
