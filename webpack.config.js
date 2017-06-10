const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = [ 'style-loader', 'css-loader' ];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [ 'css-loader' ],
    publicPath: '/dist'
});

module.exports = {
    entry: [ 'react-hot-loader/patch', './app/index.js' ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules:  [
            {
                test:/\.css$/,
                use: isProd? cssProd : cssDev
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: [ 'react-hot-loader/webpack', 'babel-loader' ]
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Idle Hacker',
            filename: 'index.html',
            template: './app/app.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: !isProd,
            allChunks: true
        })
    ]
}