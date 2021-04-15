/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Me",
    description: "A personal website for me, Ben Silverman!",
    author: "@bensilverman_",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              noInlineHighlight: true,
              aliases: {
                js: "javascript",
              },
            },
          },
        ],
      },
    },
  ],
};
