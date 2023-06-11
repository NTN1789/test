/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "dca640ed588d2b47a070ce392425a4"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components"]
};