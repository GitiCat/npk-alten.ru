const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: ['./src/index.js', './src/style.scss'],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin('[name].css')
    ]
};