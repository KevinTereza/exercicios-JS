const path = require('path');

module.exports = {
    entry: {
        script: "./src/scripts/script.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }

        ]
    },
    mode: "production"
}
