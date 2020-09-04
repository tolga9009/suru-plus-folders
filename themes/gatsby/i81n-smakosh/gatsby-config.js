const config = require("./data/config")

module.exports = {
  siteMetadata: {
    title: `Suru++ Folders`,
    titleTemplate: "Folder colour switcher",
    description: `Suru++ Folders is a bash script that allows changing the color of folders`,
    site_url: config.url,
    author: `Suru++ Project`
  },
  plugins: [
    // ðµð¹ Este plugin precisa estar no primeiro lugar
    // ð¬ð§ This plugin needs to be in the first place.
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.url
      }
    },

    `gatsby-plugin-catch-links`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true
      }
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baloo Tamma 2`,
          `Playfair Display`,
          `Poppins`,
          `Roboto`,
          `Rubik`,
          `Teko`
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suru++ Folders`,
        short_name: `Suru++ Folders`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icons: [
          {
            src: `src/assets/images/favicons/logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/assets/images/favicons/logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },

    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false
      }
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.suru-plus.lan",
        sitemap: "https://www.suru-plus.lan/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        },
        includePaths: ["src/assets/sass/compile.scss"]
      }
    },

    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`
        ]
      }
    },

    `gatsby-plugin-styled-jsx`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,

    `gatsby-plugin-theme-ui`,
    `theme-ui`,

    // ðµð¹ Estes plugins precisam estar no Ãºltimo lugar
    // ð¬ð§ These plugins need to be in the last place.
    `gatsby-plugin-no-javascript`,
    `gatsby-plugin-offline`
  ]
}
