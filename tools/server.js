import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  // Open browser
  open: false,
  port: 8888,
  ui: {
    port: 8889
  },
  server: {
    baseDir: 'src',
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: config.output.publicPath,
        // These settings suppress noisy webpack output so only errors are displayed to the console.
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),
      // bundler should be the same as above
      webpackHotMiddleware(bundler)
    ]
  },
  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ]
});
