const path               = require('path');
const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    // publicPath: '/',
    // publicPath: path.resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    filename: 'assets/js/main.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'X-Dev-Book': 'dev-server'
    },
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin(),

      new ExtractTextPlugin({
          filename: 'assets/css/style.bundle.css'
      }),

      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        proxy: 'http://dev-boilerplate.theme',
        files: ['./public/index.php', './themes/*/*.php', './themes/*/*/*.php'],
        // server: {
        //   baseDir: ['public']
        // },
      }),
  ],
  module: {
    rules: require('./config/webpack.config.rules')
  }
};