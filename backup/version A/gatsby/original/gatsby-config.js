const config = require('./data/config');

module.exports = 
{
	siteMetadata: 
	{
		title: `Suru++ Folders`,
    titleTemplate: "Folder colour switcher",
    description: `Suru++ Folders is a bash script that allows changing the color of folders`,
		site_url: config.url,
		// siteUrl: "https://suru-plus.lan",
    author: 
    {
      name: `Suru++ Project`,
      url: ``,
      email: `suru-plus@users.noreply.github.com`,
    },
    social: 
    {
      github: `https://github.com/suru-plus`,
      twitter: ``,
    },
	},
	plugins: 
	[
		// 🇵🇹 Este plugin precisa estar no primeiro lugar
    // 🇬🇧 This plugin needs to be in the first place.
		`gatsby-plugin-react-helmet`,

		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: 
			{
				siteUrl: config.url
				// siteUrl: `https://suru-plus.lan`,
			}
		},

		`gatsby-plugin-catch-links`,

		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: 
		// 	{
		// 		trackingId: config.googleAnalyticsID,
		// 		head: true
		// 	}
		// },

		{
			resolve: `gatsby-plugin-google-fonts`,
			options: 
			{
				fonts: [`Baloo Tamma 2`, `Playfair Display`, `Poppins`, `Roboto`, `Rubik`, `Teko`]
			}
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: 
			{
				name: `Suru++ Folders`,
				short_name: `Suru++ Folders`,
				start_url: '/suru-plus-folders',
				// start_url: `/`,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: `minimal-ui`,
				// icon: `src/assets/images/gatsby-icon.png`,
				icons: 
				[
					{
						src: `src/assets/images/favicons/logo-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
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
			options: 
			{
				color: config.themeColor,
				showSpinner: false
			}
		},

		{
      resolve: 'gatsby-plugin-robots-txt',
      options: 
      {
        host: 'https://www.suru-plus.lan',
        sitemap: 'https://www.suru-plus.lan/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
		},
		
		{
      resolve: `gatsby-plugin-sass`,
      options: 
      {
        cssLoaderOptions: 
        {
          camelCase: false,
        },
        includePaths: ["src/assets/sass/compile.scss"],
      },
		},

		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,

		{
      resolve: `gatsby-transformer-remark`,
      options: 
      {
        plugins: 
        [
          {
            resolve: `gatsby-remark-images`,
            options: 
            {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: 
            {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
		},
		
		`gatsby-plugin-styled-jsx`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,

		// {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/blog`,
    //     name: `blog`,
    //   },
		// },
		// {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/config/translations`,
    //     name: `translations`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: 
    //   {
    //     path: `${__dirname}/locale`,
    //     name: `locale`,
    //   },
		// },
		
		// {
    //   resolve: `@wapps/gatsby-plugin-i18next`,
    //   options: 
    //   {
    //     availableLngs: [`en`, `pt`],
    //     fallbackLng: `pt`,
    //     i18nextOptions: 
    //     {
    //       debug: false,
    //     },
    //   },
    // },

		`theme-ui`,
		
		// 🇵🇹 Estes plugins precisam estar no último lugar
		// 🇬🇧 These plugins need to be in the last place.
		`gatsby-plugin-no-javascript`,
    `gatsby-plugin-offline`
	]
};
