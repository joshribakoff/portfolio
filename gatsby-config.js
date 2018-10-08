module.exports = {
  pathPrefix: `/portfolio`,
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
  ]
};
