import config from './config.web'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

var port = parseInt(process.env.PORT) || 5555;

config.entry.app = [
  'webpack-dev-server/client?http://localhost:' + port + '/',
  'webpack/hot/dev-server'
];

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true
});

server.listen(port);
