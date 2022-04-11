module.exports = {
  siteMetadata: {
    title: `alliance-media`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": ""
    }
  }, "gatsby-plugin-styled-components"]
};