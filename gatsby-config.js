require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `alliance-media`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 3,
        prependToBody: false,
        color: `#ffc730`,
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        // preview: false,
        // disableLiveReload: false,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        custom: [
          {
            name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
            file: "/fonts/fontAwesome/css/all.min.css",
          },
        ],
        web: [
          {
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
          },
        ],
      },
    },
  ],
};
