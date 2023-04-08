import Layout from 'components/common/Layout';
import { graphql } from 'gatsby';

type Props = {
  location: { href: string };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    file: {
      publicURL: string;
    };
  };
};

const About = ({
  location: { href },
  data: {
    site: {
      siteMetadata: { title, description },
    },
    file: { publicURL },
  },
}: Props) => {
  return (
    <Layout
      title='About'
      description={description}
      url={href}
      image={publicURL}>
      열띠미 만드는 중
    </Layout>
  );
};

export default About;

export const getSiteMetadata = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(name: { eq: "introduction-avatar-image" }) {
      publicURL
    }
  }
`;
