/*global module:false*/
module.exports = function (grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    watch: {
      css: {
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: ['sass-convert']
      },
    },
    'sass-convert': {
      scss: {
        files: [{
          src: ['scss/*.scss']
        }]
      }
    },
  });

  grunt.registerTask('build', [
    'sass-convert',
  ]);
};
