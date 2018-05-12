import webpack from 'webpack';
import webpackConfig from './webpack.config.prod';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.error(err);
    return 1;
  }
  return 0;
});
