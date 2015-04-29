'use strict';

  module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
      jshint: {
        dev: {
          src: ['Gruntfile.js', 'hello.js', 'test/**/*.js']
        },

        options: { 
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true,
            beforeEach: true,
            afterEach: true
          }
        }
      },
      simplemocha: {
        options: {
          timeout: 3000
        },
        dev: {
          src: ['Gruntfile.js', 'hello.js', 'test/**/*.js']
        }
      },
      watch: {
        scripts: {
          files: ['Gruntfile.js', 'hello.js', 'test/**/*.js'],
          tasks: ['jshint'],
          options: {
            spawn: false
          },
        },
      },
    });
    grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
    grunt.registerTask('default', ['test']);
  };