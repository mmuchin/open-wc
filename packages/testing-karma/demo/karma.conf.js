// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const defaultConfig = require('../default-config.js');

module.exports = config => {
  config.set(
    merge(defaultConfig(config), {
      files: [
        // allows running single tests with the --grep flag
        config.grep ? config.grep : 'test/**/*.test.js',
      ],
      // additional custom config here
    }),
  );
  return config;
};
