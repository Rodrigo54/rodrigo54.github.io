require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Rodrigo Alves`,
    position: `Desenvolvedor Full Stack`,
    description: `Sou um Full Stack Web Developer que gosta de aprender novas formas de programar. Tento me esforçar para ser um bom artista na web.`,
    author: `@rodrigo54`,
    siteUrl: `http://rodrigoalves.me`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-typescript`,
     // needs to be the first to work with gatsby-remark-images
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-embed-gist`,
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-vscode`,
            colorTheme: {
              defaultTheme: 'Dark+ (default dark)',    // Required
              prefersDarkTheme: 'Dark+ (default dark)', // Optional: used with `prefers-color-scheme: dark`
              prefersLightTheme: 'Light+ (default light)'    // Optional: used with `prefers-color-scheme: light`
            }
          }
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodrigo Alves`,
        short_name: `Rodrigo Alves`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `static/assets/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
