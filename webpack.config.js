const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './app/public');

const webpackConfig = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    resolve: {
        modules: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            AppConfig: path.resolve(__dirname, 'app/config'),
            api : path.resolve(__dirname, 'app/api'),
            actions: path.resolve(__dirname,'app/actions'),
            reducers: path.resolve(__dirname,'app/reducers')
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './app'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './app/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './app/public'),
        port: 8090,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
};

module.exports = webpackConfig;