import path from 'path';
import webpack from 'webpack'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default  {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    publicPath:'/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        plugin:[
          new UglifyJSPlugin({
            sourceMap: true
          })
        ]
      }
    })
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname,'node_modules/,'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
