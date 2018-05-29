const path = require('path');
const srcDirectoryName = "src";
const distDirectoryName = "dist";
const indexHtml = path.join(__dirname, srcDirectoryName, "index.html");
const mainTypescriptFilePath = path.join(__dirname, srcDirectoryName,"main.ts");

module.exports = {
    mode: "development",
    entry:[
        mainTypescriptFilePath,
        indexHtml,
    ],
    devServer: {
        contentBase: path.join(__dirname, distDirectoryName),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, distDirectoryName),
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
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
                test: /\.tsx?$/,
                loader: "ts-loader",
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