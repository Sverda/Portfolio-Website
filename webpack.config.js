const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "src"),
		port: 8000,
		watchContentBase: true,
	},
	module: {
		rules: [{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.svg$/,
				use: [{
					loader: "svg-url-loader",
					options: {
						limit: 10000,
					},
				}, ],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: "file-loader",
					options: {},
				}, ],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
