var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/main.js',
  output: {
    path: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!lessloader'
      },
      {
        test: /\.(png|jpg|ttf)$/,
        loader: 'url-loader?limit=40000'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'veu',
      filename: 'index.html',
      template: 'index1.html'
    }) 
  ]
}