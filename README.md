# 승준이의 블로그 개발기

프로젝트를 진행하고 난 후의 회고나 새로 배운 것들을 블로그에 정리하고 있습니다.

<br />

## Gatsby Plugin 구성

`gatsby-config.js`

```javascript
module.exports = {
  siteMetadata: {
    title: 'Dev-Log',
    description: '프론트엔드 개발자 승두니의 이야기',
    author: 'Shin Seung Jun',
    siteUrl: 'https://metacode22.github.io/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-advanced-sitemap',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
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
          'gatsby-plugin-react-helmet',
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
        siteUrl: 'https://metacode22.github.io/',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
```

<br />

## 기술 스택

<img src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=Gatsby&logoColor=ffffff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Emotion-CC67BC?style=for-the-badge&logo=Emotion&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=ffffff"/> <img src="https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Github Pages-222222?style=for-the-badge&logo=Github Pages&logoColor=ffffff"/>
