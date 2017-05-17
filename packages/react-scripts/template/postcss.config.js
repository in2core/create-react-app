'use strict';

module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    },
    'postcss-cssnext': {},
    'postcss-each': {},
    'postcss-flexbugs-fixes': {},
    'postcss-import': {
      root: __dirname,
    },
    'postcss-mixins': {},
  },
};
