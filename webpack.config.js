const path = require('path');
const srcDirectoryName = "src";
const distDirectoryName = "dist";

module.exports = {
    mode: "development",
    entry:[
        path.join(__dirname, srcDirectoryName,"/main.ts"),
    ],
    devServer: {
        contentBase: path.join(__dirname, distDirectoryName),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'layDesc.js',
        path: path.resolve(__dirname, distDirectoryName),
        library: "layDesc",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
        minimize: true,
    }
};