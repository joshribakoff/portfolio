module.exports = {
  pathPrefix: `/portfolio`,
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: 'UCjRZ1UuCCDutlIk_skNvSlw',
        apiKey: 'AIzaSyAPBMeV1x-3FAal-XE5J63tNaNSC-b35dk',
        maxVideos: 50 // Defaults to 50
      },
    },
  ]
};
