import path from 'path';
import {NormalModuleReplacementPlugin} from 'webpack';
import {version} from '../package'
import {merge} from 'webpack-merge'
import configShared  from './config.shared.js'
import webpack from 'webpack'
import { Buffer as buffer } from '@craftzdog/react-native-buffer';

const config = merge({}, configShared, {
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
    // our Reachability implementation needs to reference @react-native-community/netinfo.
    '@react-native-community/netinfo': '@react-native-community/netinfo'
  },
  resolve: {
    modules: ['src/runtimes/react-native']
  },
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME: JSON.stringify('react-native')
    }),
    new webpack.ProvidePlugin({
      buffer: buffer
    })
  ]
});
export default config