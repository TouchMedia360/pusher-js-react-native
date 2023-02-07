import path from 'path'
import { merge } from 'webpack-merge'
import configShared from './config.shared'
import webpack from 'webpack'

const config = merge({}, configShared, {
  entry: {
    pusher: './src/core/pusher-with-encryption.js'
  },
  output: {
    library: 'Pusher',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/node'),
    filename: 'pusher.js'
  },
  target: 'node',
  resolve: {
    // in order to import the appropriate runtime.ts
    modules: ['src/runtimes/node']
  },
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME: JSON.stringify('node')
    })
  ]
});
export default config