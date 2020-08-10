const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    }
  }
});