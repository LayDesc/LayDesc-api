const path = require('path');
const srcDirectoryName = "src";
const distDirectoryName = "dist";

module.exports = {
    entry:[
        path.join(__dirname, srcDirectoryName,"/main.ts"),
    ],
    devServer: {
        contentBase: path.join(__dirname, distDirectoryName),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'LayDesc.js',
        path: path.resolve(__dirname, distDirectoryName),
        library: "LayDesc",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            }
        ]
    }
};