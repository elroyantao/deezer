const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', `${APP_DIR}/index.jsx`],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: `${APP_DIR}/index.html`
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      // allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]']
          })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
