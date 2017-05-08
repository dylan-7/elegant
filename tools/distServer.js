// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

// Run Browsersync
browserSync({
  port: 1680,
  ui: {
    port: 1681
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    './*.html'
  ],

  middleware: [historyApiFallback()]
});
