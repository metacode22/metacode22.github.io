import { PageProps } from 'gatsby';

import metaConfig from '../../gatsby-meta';
import { ROUTES } from './constants/routes';
import { isPostDetailUrl } from './validations';

type PageContext = {
  slug: string;
  title: string;
  summary: string;
  publicURL: string;
};

type PagePropsWithCustomPageContext = {
  pageContext: PageContext;
} & PageProps;

export const makeMetadata = (props: PagePropsWithCustomPageContext) => {
  const { path, pageContext } = props;

  if (isPostDetailUrl(path)) {
    return {
      title: pageContext.title,
      description: pageContext.summary,
      url: metaConfig.siteUrl + pageContext.slug.substring(1),
      image: pageContext.publicURL,
    };
  } else {
    return {
      title: metaConfig.title,
      description: metaConfig.description,
      url: metaConfig.siteUrl + (path === ROUTES.HOME ? '' : path.substring(1)),
      image: 'https://avatars.githubusercontent.com/u/93233930?v=4',
    };
  }
};
