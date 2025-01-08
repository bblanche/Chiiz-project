const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.html', './src/**/*.ts'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });
  git
  module.exports = {
    plugins: [
      require('autoprefixer'),
      purgecss
    ]
  };