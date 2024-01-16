const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

const entryList = { "armigate-client": "./src/armigate-client.js", ...isProduction ? {} : { index: "./src/index.js" } };

const pluginList = isProduction ? [] : [
    new HtmlWebpackPlugin({
        title: "Test App",
        excludeChunks: ['armigate-client']
    }),]

module.exports = {
    devtool: isProduction ? false : "source-map",
    entry: entryList,
    output: {
        filename: "[name].js",
        libraryTarget: 'umd',
        library: 'armigate-client-side'
    },
    devServer: {
        port: 9000,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    plugins: pluginList,
};
