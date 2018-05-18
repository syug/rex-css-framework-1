const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(['build']),
];

const rules = [

];

module.exports = merge(common, {
  plugins,
  module: {
    rules,
  },
});
