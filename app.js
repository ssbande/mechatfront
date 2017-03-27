require('core-js/fn/object/assign');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const app = require('./webpack.config');
const config = app.config;
const port = app.port;
const open = require('open');

let isInitialCompilation = true;
const compiler = webpack(config);

new webpackDevServer(compiler, config.devServer)
  .listen(port, 'localhost', (err) => {
    err ? console.log(err) : console.log('listening at localhost:' + port);
  });

compiler.plugin('done', () => {
  if(isInitialCompilation) {
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log(`        Opening http://localhost:${port}\n`);
      console.log(`\x1b[33mBundle will rebuild automatically on live update ..\x1b[0m`);
      open('http://localhost:' + port);
    });
  }

  isInitialCompilation = false;
})
