module.exports = {
  siteMetadata: {
    title: `pázori.ru`,
    description: `Одежда и аксессуары из Мурманска`,
    author: `@nikitashal`,
    url: "https://www.pazori.ru",
    image: "/images/gatsby-icon.png",
  },
  plugins: [
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
        name: `pazori.ru`,
        short_name: `pazori`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111537010-3",
      },
    },
  {
    resolve: `gatsby-plugin-yandex-metrika`,
    options: {
      trackingId: 67178128,
      webvisor: true,
      trackHash: true,
      afterBody: false,
      defer: false,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
