var path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname) + '/index.js',
	
	output: {
		path: path.resolve(__dirname) + '/dist',
		publicPath: '/dist',
		filename: 'pregx.js' // pregx.min.js during minification
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: { presets: ['es2015'] }
			}
		]
	},

	/*plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true,
			compress: true
		})
	]*/
};
