/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "/src/styles/variables.scss";`,
  },
});
