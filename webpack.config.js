const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    target: 'web',
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
            {
                //JS loader
                test: /\.(js|jsx)$/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                //Image/PDF loader
                test: /\.(pdf|jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
            {
                //Font loader
                test: /\.(woff2|woff)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                //SCSS loader
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                    {
                        loader: 'sass-resources-loader?sourceMap',
                        options: {
                            resources: require(path.join(
                                process.cwd(),
                                'src/assets/styles/main.js'
                            ))
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: 'src/assets/images/favicon.ico'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hotOnly: true,
        port: 4000
    }
}
