const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/'
  ],
  resolve: {
    modules: ['node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'LazyloadMainComponent',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3
              }]
            ]
          }
        }
      }
    ]
  }
}
