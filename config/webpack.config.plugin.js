const plugins = [];

const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
//const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GoogleFontsPlugin  = require('google-fonts-webpack-plugin');
//const ImageminPlugin     = require('imagemin-webpack-plugin').default;
const BrowserSyncPlugin  = require('browser-sync-webpack-plugin');

module.exports = [
  //new CleanWebpackPlugin(
  //		['./public/assets'],
  //		{root: __dirname, verbose: true, dry: false, exclude: []}
  //),

  new ImageminPlugin(
      {test: /\.(png|jp(e*)g|svg)$/}
  ),

  new ExtractTextPlugin({
    filename: 'assets/css/style.bundle.css'
  }),

  /*	new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './res/views/AppView.html',
      inject: 'body'
    }),*/

  new webpack.HotModuleReplacementPlugin(),

  new webpack.NamedModulesPlugin(),

  new CopyWebpackPlugin([
    {from: './res/images', to: './assets/img'}
  ]),

  new BrowserSyncPlugin({
    // browse to http://localhost:3000/ during development,
    // ./public directory is being served
    host: 'dev-boilerplate.theme',
    port: 1910,
    files: ['./public/*.php', './themes/*/*.php', './themes/*/*/*.php'],
    server: {
      baseDir: ['public']
    },
  })
];