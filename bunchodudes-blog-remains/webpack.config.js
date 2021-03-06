"use strict";

const path = require("path");

module.exports = {
    // something about bundle size, IDEK
    mode: "development",

    // Set debugging source maps to be "inline" for
    // simplicity and ease of use
    devtool: "inline-source-map",

    // The application entrypoint
    entry: "./src/index.tsx",

    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        filename: "bundle.js"
    },

    // Supported file loaders
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    // File extensions to support resolving
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};
