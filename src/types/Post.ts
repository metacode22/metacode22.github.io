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
    timeToRead: number;
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: Frontmatter;
  };
};

export type PostDetail = {
  node: {
    tableOfContents: string;
    timeToRead: number;
    html: string;
    frontmatter: Frontmatter;
  };
  previous: {
    fields: {
      slug: string;
    };
  };
  next: {
    fields: {
      slug: string;
    };
  };
};
