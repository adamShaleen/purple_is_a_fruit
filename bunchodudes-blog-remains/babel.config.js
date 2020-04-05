module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    // IDEK...
    plugins: ["transform-es2015-modules-commonjs"]
};
