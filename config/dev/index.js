const path = require('path');
const webpack = require('webpack');
let BowerWebpackPlugin = require("bower-webpack-plugin");
const base = require('./../defaults');
const defaultConfig = new base();

let config = Object.assign(defaultConfig.config(), {
    entry: [
        'webpack-dev-server/client?http://localhost:' + defaultConfig.port,
        'webpack/hot/only-dev-server',
        './src/app/index'
    ],
    cache: true,
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BowerWebpackPlugin()
    ],
    module: defaultConfig.modules(),
});

config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: '/node_modules/'
});

module.exports = {
    config,
    port: defaultConfig.port
}