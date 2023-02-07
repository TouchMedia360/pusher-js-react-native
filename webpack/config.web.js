
import path from 'path'
import { merge } from 'webpack-merge'
import configShared from './config.shared'
import webpack from 'webpack'
import {NormalModuleReplacementPlugin} from 'webpack';

var filename = configShared.optimization.minimize
  ? 'pusher.min.js'
  : 'pusher.js';

var entry = './src/core/pusher.js';
if (process.env.INCLUDE_TWEETNACL === 'true') {
  entry = './src/core/pusher-with-encryption.js';
  filename = filename.replace('pusher', 'pusher-with-encryption');
}

const config = merge({}, configShared, {
  entry: {
    pusher: entry
  },
  output: {
    library: 'Pusher',
    path: path.join(__dirname, '../dist/web'),
    filename: filename,
    libraryTarget: 'umd'
  },
  resolve: {
    modules: ['src/runtimes/web']
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'window',
      RUNTIME: JSON.stringify('web')
    })
  ]
});
export default config
