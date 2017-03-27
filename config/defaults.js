const path = require('path');
const defaultPort = 3264;

class DefaultConfig {
    constructor() {
        this.port = 3264;
        this.srcPath = path.join(__dirname, './../src');
        this.publicPath = '/assets';
    }

    config() {
        console.log(path.join(__dirname, './../dist/lib'));
        return {
            devtool: 'source-map',
            output: {
                path: path.join(__dirname, './../dist/lib'),
                filename: 'bundle.js',
                publicPath: '/assets/'
            },
            devServer: {
                contentBase: this.srcPath,
                historyApiFallback: true,
                hot: true,
                noInfo: false,
                publicPath: '/assets/'
            },
            resolve: {
                extensions: ['.js', '.json', '.css'],
                alias: {
                    styles: `${this.srcPath}/contents/css`,
                    fonts: `${this.srcPath}/contents/fonts`,
                    images: `${this.srcPath}/contents/images`,
                    libs: `${this.srcPath}/contents/libs`
                }
            }
        }
    }

    modules() {
        return {
            rules: [{
                    test: /\.css$/,
                    loader: 'style-loader!css-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.sass$/,
                    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.less$/,
                    loader: 'style-loader!css-loader!less-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=8192',
                    exclude: '/node_modules/'
                }
            ]
        };
    }
}

module.exports = DefaultConfig