module.exports = function (config) {
  'use strict';

  config.set({
    basePath : '..',

    files: [
      'vendor/assets/javascripts/jquery/jquery.js',
      'vendor/assets/javascripts/lodash/lodash.js',

      'vendor/assets/javascripts/angular/angular.js',
      'vendor/assets/javascripts/angular/angular-resource.js',

      'vendor/assets/javascripts/angular-ui/angular-ui-bootstrap.js',
      'vendor/assets/javascripts/angular-ui/angular-ui-router.js',

      'lib/assets/javascripts/{*,**/*}.js',
      'app/assets/javascripts/{*,**/*}.js',

      'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'lib/assets/javascripts/{*,**/*}.js': ['coverage'],
      'app/assets/javascripts/{*,**/*}.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage_reports'
    },

    reportSlowerThan: 75,

    browsers: [
      'IE',
      'Chrome',
      'Firefox'
    ],

    singleRun: true
  });
};
