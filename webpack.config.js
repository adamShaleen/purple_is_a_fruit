const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "babel-polyfill",
        "./src/index.js"
    ],
    performance: { hints: false },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: ""
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
  };