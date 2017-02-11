const path = require('path')

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
    }, {
      test: /\.(js|tag)$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/
    }, {
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
  },
  devServer: {
    contentBase: [
      rel('app'),
      rel('node_modules')
    ]
  }
}
