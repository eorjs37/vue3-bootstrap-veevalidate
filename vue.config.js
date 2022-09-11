const path = require('path');
module.exports = {
  configureWebpack: config => {
    config.output.filename = 'js/[name].[contenthash:8].min.js';
    config.output.chunkFilename = 'js/[name].[contenthash:8].min.js';
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
  },
};
