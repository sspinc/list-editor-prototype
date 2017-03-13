const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const git = require('git-rev-sync');
const pkg = require('./package.json');

const branch = git.branch();
const version = branch === 'master' ? pkg.version : branch;
const publicPath = branch === 'master' ? pkg.version : `branch/${branch}`
const timestamp = new Date().toISOString();
const sha = git.short();
const banner = `list-editor-prototype ${version} ${timestamp} ${sha}`;

const production = process.argv.indexOf('-p') !== -1;

const lessLoaders = ['css-loader', 'postcss-loader', 'less-loader'];
const extractLESS = new ExtractTextPlugin('listeditor.min.css');

let plugins = [
    new CleanWebpackPlugin(['dist'], {
        verbose: true
    }),
    new webpack.BannerPlugin({
        banner,
        entryOnly: true,
        raw: false
    }),
    new HtmlWebpackPlugin({
        title: 'List Editor Prototype',
        template: './src/index-template.ejs'
    }),
    extractLESS
];

let performance;
let devtool;
let lessRule;

if (!production) {
    devtool = 'source-map';
    performance = {
        hints: false
    };
}

module.exports = {
    entry: './src/index.js',
    devtool,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader'].concat(lessLoaders)
            }
        ]
    },
    plugins,
    performance,
    output: {
        path: `${__dirname}/dist`,
        pathinfo: !production,
        publicPath: '/',
        filename: 'listeditor.js'
    },
    devServer: {
        port: 5555
    }
};
