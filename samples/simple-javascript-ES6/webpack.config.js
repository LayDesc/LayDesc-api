const path = require('path');
const srcDirectoryName = "src";
const distDirectoryName = "dist";
const indexHtml = path.join(__dirname, srcDirectoryName, "index.html");

module.exports = {
    entry:[
        path.join(__dirname, srcDirectoryName,"/main.js"),
        indexHtml,
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, distDirectoryName),
        library: "LayDesc",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: indexHtml,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "link:href"],
                            interpolate: true,
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                loaders: [
                    {
                        loader: "file-loader"
                    },
                ],
            },
        ]
    }
};