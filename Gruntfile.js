module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    vendor: {
      javascripts: [
        'vendor/assets/javascripts/jquery/jquery.js',
        'vendor/assets/javascripts/lodash/lodash.js',

        'vendor/assets/javascripts/angular/angular.js',
        'vendor/assets/javascripts/angular/angular-resource.js',

        'vendor/assets/javascripts/angular-ui/angular-ui-bootstrap.js',
        'vendor/assets/javascripts/angular-ui/angular-ui-router.js'
      ],

      stylesheets: [
        // Place vendor stylesheets here in order of concatenation
      ]
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      javascripts: [
        'lib/assets/javascripts/**/*.js',
        'app/assets/javascripts/**/*.js'
      ]
    },

    uglify: {
      options: {
        compress: false
      },

      javascripts: {
        src: [
          '<%= vendor.javascripts %>',

          'lib/assets/javascripts/{*,**/*}.js',
          'app/assets/javascripts/{*,**/*}.js'
        ],

        dest: 'public/assets/application.js'
      }
    },

    less: {
      options: {
        compress: true
      },

      stylesheets: {
        src: [
          '<%= vendor.stylesheets %>',

          'lib/assets/stylesheets/*.less',
          'app/assets/stylesheets/*.less'
        ],

        dest: 'public/assets/application.css'
      }
    },

    copy: {
      templates: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }, {
          expand: true,
          cwd: 'lib/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }, {
          expand: true,
          cwd: 'app/assets/templates',
          src: ['**/*.html'],
          dest: 'public/assets/templates'
        }]
      },

      images: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }, {
          expand: true,
          cwd: 'lib/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }, {
          expand: true,
          cwd: 'app/assets/images',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'public/assets/images'
        }]
      },

      fonts: {
        files: [{
          expand: true,
          cwd: 'vendor/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }, {
          expand: true,
          cwd: 'lib/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }, {
          expand: true,
          cwd: 'app/assets/fonts',
          src: ['**/*.{eot,svg,ttf,woff}'],
          dest: 'public/assets/fonts'
        }]
      }
    },

    watch: {
      javascripts: {
        files: ['{vendor,lib,app}/assets/javascripts/**'],
        tasks: ['uglify:javascripts']
      },

      stylesheets: {
        files: ['{vendor,lib,app}/assets/stylesheets/**'],
        tasks: ['less:stylesheets']
      },

      templates: {
        files: ['{vendor,lib,app}/assets/templates/**'],
        tasks: ['copy:templates']
      },

      images: {
        files: ['{vendor,lib,app}/assets/images/**'],
        tasks: ['copy:images']
      },

      fonts: {
        files: ['{vendor,lib,app}/assets/fonts/**'],
        tasks: ['copy:fonts']
      },

      release: {
        options: {
          livereload: true
        },

        files: ['public/**']
      }
    },

    connect: {
      options: {
        hostname: 'localhost',
        keepalive: true,
        debug: true,
        livereload: true,
        open: true
      },

      server: {
        options: {
          base: ['public']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', [
    'uglify:javascripts',
    'less:stylesheets',
    'copy:templates',
    'copy:images',
    'copy:fonts'
  ]);
};
