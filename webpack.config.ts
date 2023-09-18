import { Configuration, SourceMapDevToolPlugin, ProvidePlugin } from 'webpack';
import path from 'path';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const config: Configuration = {
    mode: 'none',
    entry: { app: path.join(__dirname, 'src', 'index.tsx') },
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        https: false,
        port: 8089,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '../',
    },
    plugins: [
        new SourceMapDevToolPlugin({ filename: '[file].map' }),
        new ProvidePlugin({ process: 'process/browser.js' }),
        // new MiniCssExtractPlugin({
        //     filename: '../../styles/[name].css',
        // }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/styles', to: '../dist/styles' },
            ],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            process: 'process/browser.js',
            styles: path.resolve(__dirname, 'src/styles')
        },
        fallback: {
            util: require.resolve('util/'),
            stream: require.resolve('stream-browserify'),
            assert: require.resolve('assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify'),
            url: require.resolve('url'),
        },
    },
};

export default config;
