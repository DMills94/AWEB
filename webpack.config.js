const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    target: 'web',
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
            {
                //JS loader
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                //Image loader
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
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
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist/')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: 'src/assets/images/favicon.ico'
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 4000,
        hotOnly: true
    }
}
