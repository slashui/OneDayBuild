/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "libs/i18n/i18n.js"
);

module.exports = withNextIntl(nextConfig);


const withVideo = require('next-videos');
module.exports = withVideo();