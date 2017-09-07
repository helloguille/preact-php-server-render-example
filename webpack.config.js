const path = require('path');

module.exports = {
	entry: {client: './src/index-client.js', server: './src/index-server.js'},
	output: {
		filename: 'bundle-[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'var',
		library: 'EntryPoint'

	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};