const path = require('path');

const coverage = process.argv.find(arg => arg.includes('coverage'));
const legacy = process.argv.find(arg => arg.includes('legacy'));

/**
 * Creates a basic karma configuration file.
 *
 * See demo/karma.conf.js for an example implementation.
 */
module.exports = config => ({
  browsers: ['ChromeHeadlessNoSandbox'],

  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  },

  frameworks: ['mocha', 'source-map-support', 'webpack'],

  middleware: ['static'],

  static: {
    path: path.join(process.cwd(), ''),
  },

  preprocessors: {
    '**/*.test.js': ['webpack', 'sourcemap'],
    '**/*.spec.js': ['webpack', 'sourcemap'],
  },

  reporters: coverage ? ['mocha', 'coverage-istanbul'] : ['mocha'],

  mochaReporter: {
    showDiff: true,
  },

  client: {
    mocha: {
      reporter: 'html',
    },
  },

  colors: true,

  // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
  logLevel: config.LOG_INFO,

  /** Some errors come in JSON format with a message property. */
  formatError(error) {
    try {
      if (typeof error !== 'string') {
        return error;
      }
      const parsed = JSON.parse(error);
      if (typeof parsed !== 'object' || !parsed.message) {
        return error;
      }
      return parsed.message;
    } catch (_) {
      return error;
    }
  },

  // ## code coverage config
  coverageIstanbulReporter: {
    reports: ['html', 'lcovonly', 'text-summary'],
    dir: 'coverage',
    combineBrowserReports: true,
    skipFilesWithNoCoverage: true,
    thresholds: {
      global: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },

  webpack: {
    devtool: 'inline-source-map',

    resolve: {
      mainFields: [
        // current leading de-facto standard - see https://github.com/rollup/rollup/wiki/pkg.module
        'module',
        // previous de-facto standard, superceded by `module`, but still in use by some packages
        'jsnext:main',
        // standard package.json fields
        'browser',
        'main',
      ],
    },

    module: {
      rules: [
        coverage && {
          test: /\.js$/,
          loader: 'istanbul-instrumenter-loader',
          enforce: 'post',
          include: path.resolve('./'),
          exclude: /node_modules|bower_components|\.(spec|test)\.js$/,
          options: {
            esModules: true,
          },
        },

        {
          test: /\.js$|\.ts$/,
          use: {
            loader: 'babel-loader',

            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-import-meta',
                // webpack does not support import.meta.url yet, so we rewrite them in babel
                ['bundled-import-meta', { importStyle: 'baseURI' }],
              ].filter(_ => !!_),

              presets: [
                [
                  '@babel/preset-env',
                  // hardcode IE11 for legacy build, otherwise use browserslist configuration
                  { targets: legacy ? 'IE 11' : undefined },
                ],
              ],
            },
          },
        },
      ].filter(_ => !!_),
    },
  },

  autoWatch: false,
  singleRun: true,
  concurrency: Infinity,
});
