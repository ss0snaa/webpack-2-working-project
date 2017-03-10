'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
     resolve: {
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new ProgressBarPlugin()
    ]
};