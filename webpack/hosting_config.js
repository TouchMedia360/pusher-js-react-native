import Package from '../package'
export default {
  version: process.env.VERSION || Package.version,
  cdn_http: process.env.CDN_HTTP || 'http://js.pusher.com',
  cdn_https: process.env.CDN_HTTPS || 'https://js.pusher.com',
  dependency_suffix: process.env.MINIFY ? '.min' : ''
};
