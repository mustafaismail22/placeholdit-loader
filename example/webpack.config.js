'use strict';

const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: [
		path.join(__dirname, 'app.js'),
		path.join(__dirname, 'file-1.jpg')
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: './build/'
	},
	module: {
		loaders: [
			{
				test: /\.(jpe?g|png|gif)$/i,
				loaders: [
					'file-loader?name=[name]-[hash:6].[ext]',
					'placeholdit-loader'
				]
			}
		]
	},
	resolveLoader: {
		alias: {
			"placeholdit-loader": path.join(__dirname, "../index.js")
		}
	},
	debug: debug
}