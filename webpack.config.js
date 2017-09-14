const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './app/public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

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
                test: /\.(sass|scss|css)$/,
                use: extractStyle.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    require('postcss-cssnext'),
                                    require('lost')(),
                                    require('postcss-reporter')()
                                ]
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // sourceMap need be always true for working resolve-url-loader
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name:  'images/[name].[ext]',
                    limit: 10000
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './app/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        extractStyle
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