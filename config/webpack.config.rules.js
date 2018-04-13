const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{ // javascript/es6
		test: /\.(js|jsx)$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},
	{ // styles
		test: /\.s?css$/,
		use: ['extracted-loader'].concat(
				['css-hot-loader'].concat(
						ExtractTextPlugin.extract({
							fallback: 'style-loader',
							use: ['css-loader', 'sass-loader']
						})
				)
		)
	},
	{ // fonts
		test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		use: 'url-loader'
	},
	{ // fonts
		test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
		use: [{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'assets/fonts/'
			}
		}]
	},
	{ // images
		test: /\.(png|jp(e*)g)$/,
		use: [{
			loader: 'file-loader',
			options: {
				limit: 10000, // Convert images < 10kb to base64 strings
				name: '/assets/img/[name].[ext]'
			}
		}]
	},
	{ // image svg
		test: /\.svg$/,
		loader: 'raw-loader',
		options: {
			limit: 50000
		}
	},
	{ // media
		test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		loader: 'url-loader',
		options: {
			limit: 10000,
			name: '/assets/media/[name].[hash:7].[ext]'
		}
	},
	{ // html
		test: /\.(html|htm)$/,
		loader: "html-loader"
	}
];