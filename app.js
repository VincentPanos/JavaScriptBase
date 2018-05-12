import express from 'express';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import config from './webpack.config.dev';

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './src/view/index.html')));
console.log("");
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log(chalk.green('Example app listening on port 3000!'));
  }
});
