const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const typography = new ExtractTextPlugin("static/css/typography.css")
const style = new ExtractTextPlugin("static/css/style.css")
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    libraryTarget: 'umd',
  },

  resolveLoader: {
    modules: ['node_modules', 'loaders']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          },
        ]
      },
      {
        test: /typography.js$/,
        use: typography.extract({
          use: [
            "css-loader",
            'typography-loader',
            'babel-loader',
          ],
        }),
      },
      {
        test: /\.s?css$/,
        use: style.extract({
          use: ['css-loader?modules', 'sass-loader'],
          fallback: 'style-loader',
        }),
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
            }
          }
        ]
      },
    ]
  },
  plugins: [
    typography,
    style,
    new StaticSiteGeneratorPlugin(),
  ]
}
