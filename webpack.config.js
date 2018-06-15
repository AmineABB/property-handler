const webpack                     = require('webpack')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const { resolve }                 = require('path')
const CleanWebpackPlugin          = require('clean-webpack-plugin')
const { CONF }                    = require('./webpack.config/index')

module.exports = env => {

	// ENV: dev or prod
	const { ifProd, ifNotProd } = getIfUtils(env)

	const config = {
		entry: resolve(__dirname, CONF.input),
		output: {
			path: resolve(__dirname, CONF.output),
			filename: 'index.js',
			publicPath: CONF.output,
			library: CONF.libName,
			libraryTarget: 'umd',
			umdNamedDefine: true,
			globalObject: 'this'
		},
		devtool: ifProd('none', 'cheap-module-eval-source-map'),
		mode: 'development',
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					include: [
						resolve(__dirname, CONF.input)
					],
					loader: 'eslint-loader'
				},
				{
					test: /\.js$/,
					loaders: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		plugins: removeEmpty([
			ifProd(new CleanWebpackPlugin(resolve(__dirname, CONF.output))),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: ifProd('production', 'development')
				}
			})
		])
	}
	return config
};
