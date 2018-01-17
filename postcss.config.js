const color = require('css-color-function');

module.exports = {
  plugins: [
    require('cssnano')(),
    require('autoprefixer')(),
    require('postcss-color-function')(),
  ],
};
