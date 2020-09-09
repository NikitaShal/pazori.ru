module.exports = {
  siteMetadata: {
    title: `pázori.ru`,
    description: `Одежда и аксессуары из Мурманска`,
    author: `@nikitashal`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
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
      // The ID of yandex metrika.
      trackingId: 67178128,
      // Enabled a webvisor. The default value is `false`.
      webvisor: true,
      // Enables tracking a hash in URL. The default value is `false`.
      trackHash: true,
      // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
      // and `true` means after the body (faster loading, less hits). The default value is `false`.
      afterBody: true,
      // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
      // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
      defer: false,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
