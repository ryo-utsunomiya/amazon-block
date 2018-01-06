module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'build/index.js',
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool: process.NODE_ENV === 'production' && 'inline-source-map',
};
