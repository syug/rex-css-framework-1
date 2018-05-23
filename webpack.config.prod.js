const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
  'rex-default': './src/style/themes/theme-default',
  'rex-blue': './src/style/themes/theme-blue',
  'rex-red': './src/style/themes/theme-red',
  'rex-green': './src/style/themes/theme-green',
  'rex-yellow': './src/style/themes/theme-yellow',
  'rex-purple': './src/style/themes/theme-purple',
  'rex-pink': './src/style/themes/theme-pink',
  'rex-blue': './src/style/themes/theme-blue',
  'rex-dark-blue': './src/style/themes/theme-dark-blue'
};

const plugins = [
  new CleanWebpackPlugin(['build']),
];

const rules = [

];

module.exports = merge(common, {
  entry,
  plugins,
  module: {
    rules,
  },
});
