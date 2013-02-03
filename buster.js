var config = exports;

config['Browser'] = {
  environment: 'browser',
  sources: [
    'lib/js/zepto-1.0rc1.js',
    'lib/js/modernizr.js',
    'lib/js/underscore-1.4.2.js',
    'lib/js/backbone-0.9.2.js',
    'dist/Mobi-min.js'
  ],
  tests: [
    'tests/*.js'
  ]
};

config['Node'] = {
  environment: 'node',
  tests: [
    'tests/node/*.js'
  ]
};