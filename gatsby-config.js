module.exports = {
  pathPrefix: `/portfolio`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-6772752-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-plugin-sharp`,
            options: {
              // Available options and their defaults:
              base64Width: 20,
              forceBase64Format: ``, // valid formats: png,jpg,webp
              useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
              stripMetadata: true,
              defaultQuality: 80,
            },
          },
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [`Roboto Mono`],
              display: "swap",
            },
          },
        ],
      },
    },
  ],
};
