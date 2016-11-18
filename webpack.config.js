var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './custom-scripts.js',
	output: {
		filename: './bundle.js'
	},
	devServer: {
		inline: true,
		quiet: true,
		port: 3333,
		https: true,

		// this is a temporary fallback for 404 error,
		// as current communication mechanism yields
		// an /authorize/ endpoint
		setup: function(app) {
			app.post('/authorize/', function(req, res) {
				res.redirect('/');
			});
		},
	},
	// autoreload for html files
	plugins: [
		new HtmlWebpackPlugin({ template: 'custom-index.ejs' })
	]
}
