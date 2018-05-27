module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'build/index.js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
