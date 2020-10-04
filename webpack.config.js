const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: 'file-loader',
        include: [/fonts/],
  
        options: {
          name: '[hash].[ext]',
          outputPath: 'css/fonts/',
          publicPath: url => '../css/' + url
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './public/index.html',
        filename: 'index.html'
      }),
  ],
};