import path from 'path';

export default  {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.js',
  target: 'web',
  output: {
    publicPath:'/',
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
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
