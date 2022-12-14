const path = require('path');
const curTime = new Date().getTime();
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename = 'js/[name].[contenthash:8].min.js';
      config.output.chunkFilename = 'js/[name].[contenthash:8].min.js';
    } else {
      config.output.filename = 'js/[name].js';
      config.output.chunkFilename = 'js/[name].js';
    }
  },

  css: {
    extract: {
      chunkFilename: process.env.NODE_ENV === 'production' ? `css/[name].[contenthash:8]-${curTime}.css` : `css/[name].css`,
    },
  },

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
  },
};
