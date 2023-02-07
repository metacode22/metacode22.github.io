/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /**
   * To Do
   * 배포 후 siteUrl 등 수정
   */
  siteMetadata: {
    title: 'Dev-Log',
    description: '프론트엔드 개발자 승두니의 이야기',
    author: 'Shin Seung Jun',
    // To Do
    // 배포 후 사이트 url로 바꾸기.
    siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // 여기 안의 image들은 포스팅에 사용됨.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
    // 여기 안의 image들은 포스팅 이 외에 쓰이는 이미지들.
    // 그냥 내가 이렇게 나눔.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static_images',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              withWebp: true,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        // To Do
        // 배포 후 사이트 url로 바꾸기.
        siteUrl: '<https://my-website.com/>',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      }
    }
  ],
};
