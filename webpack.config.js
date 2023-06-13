const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 開發模式
    mode: 'development',
    // 產生 source map
    devtool: 'inline-source-map',
    // source code 所在的位置
    entry: {
        index: './src/index.ts',
    },
    output: {
        // 打包後的檔案名稱
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/i,
                exclude: [/node_modules/, /packages/],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // 嘗試副檔名
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // 給 devserver 的設定
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
};
