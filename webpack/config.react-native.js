var path = require('path');
var NormalModuleReplacementPlugin = require('webpack')
  .NormalModuleReplacementPlugin;
var version = require('../package').version;
const { merge } = require('webpack-merge');
var configShared = require('./config.shared.js');
var webpack = require('webpack');
// var buffer = require('buffer');
var buffer = require("./buffer").Buffer;

module.exports = merge({}, configShared, {
  entry: {
    pusher: './src/core/pusher-with-encryption.js'
  },
  output: {
    library: 'Pusher',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/react-native'),
    filename: 'pusher.js'
  },
  externals: {
    'react': 'react', 
    'react-native': 'react-native',
    '@craftzdog/react-native-buffer': '@craftzdog/react-native-buffer',
    '@react-native-community/netinfo': '@react-native-community/netinfo',
  },
  resolve: {
    modules: ['src/runtimes/react-native']
  },
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME: JSON.stringify('react-native')
    }),
    new webpack.ProvidePlugin({
      buffer: 'buffer'
    })
  ]
});
