#!/bin/bash

mkdir -p src/{assets/{css,fonts,javascript,images/favicons,sass},gatsby-plugin-theme-ui} themes/gatsby/i81n-{gatsbyjs,smakosh,theodesp}/src/{assets/{css,fonts,javascript,images/favicons,sass},gatsby-plugin-theme-ui}

touch -f src/assets/sass/compile.sass themes/gatsby/i81n-{gatsbyjs,smakosh,theodesp}/src/assets/sass/compile.sass

mkdir -p src/assets/images/favicons themes/gatsby/i81n-{gatsbyjs,smakosh,theodesp}/src/assets/images/favicons

@mdx-js/mdx @mdx-js/react gatsby-link gatsby-plugin-i18n gatsby-plugin-no-javascript gh-pages intl react-router-dom