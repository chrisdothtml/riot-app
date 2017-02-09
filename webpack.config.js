const path = require('path')
const webpack = require('webpack')
const NAME = 'riot-app'

function rel (dest) {
  return path.join(__dirname, dest)
}

module.exports = {
  entry: rel('src/index.js'),
  output: {
    filename: 'bundle.js',
    path: rel('build')
  },
  module: { rules: [
    {
      test: /\.tag$/,
      loader: 'riotjs-loader',
      enforce: 'pre'
    },
    {
      test: /\.(js|tag)$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]},
  externals: {
    reselect: 'Reselect',
    riot: 'riot'
  }
}
