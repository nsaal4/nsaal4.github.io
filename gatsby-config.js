module.exports = {
  siteMetadata: {
      title: `Nour Abeid | Portfolio`,
    siteUrl: `https://www.nsaal4.github.io`
  },
  plugins: [
  //   "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
  //   resolve: 'gatsby-plugin-manifest',
  //   options: {
  //     "icon": "src/images/icon.png"
  //   }
  // },
    "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};