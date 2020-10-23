module.exports = {
  siteMetadata: {
    title: `Turnipko - beautiful pictures of your baby`,
    description: `Turnipko - Monika Górska Photography. Experienced photographer who loves taking pictures of newborns, babies and maternity.`,
    author: `Kacper Witas`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint:
          'https://api-eu-central-1.graphcms.com/v2/ckgjegi0ymgjc01z4dt3uey77/master',
        downloadLocalImages: true,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'TURNIPKO',
        fieldName: 'turnipko',
        url:
          'https://api-eu-central-1.graphcms.com/v2/ckgjegi0ymgjc01z4dt3uey77/master',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
