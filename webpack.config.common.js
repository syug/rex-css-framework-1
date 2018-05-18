const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ],
    },
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: false
  }),
];

const rules = [
  {
    test: /\.scss$|\.sass$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }),
    exclude: path.resolve(__dirname, '/assets/fonts'),
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: 'file-loader?name=img/[name].[ext]',
  },
  {
    test: /\.(svg|woff|woff2|eot|ttf)$/,
    use: 'url-loader?name=[name].[ext]',
  },
];


module.exports = {

  entry: {
    'rex-default': './src/themes/theme-default',
    'rex-blue': './src/themes/theme-blue',
    'rex-red': './src/themes/theme-red',
    'rex-green': './src/themes/theme-green',
    'rex-yellow': './src/themes/theme-yellow',
    'rex-purple': './src/themes/theme-purple',
    'rex-pink': './src/themes/theme-pink',
    'rex-blue': './src/themes/theme-blue',
    'rex-dark-blue': './src/themes/theme-dark-blue'
  },
  cache: true,

  output: {
    path: path.resolve(__dirname, 'build/themes/'),
    filename: '[name].css',
  },

  resolve: {

    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
    extensions: [
      '.js',
      '.scss',
      '.sass',
    ],
  },

  plugins,
  module: {
    rules,
  },
};
