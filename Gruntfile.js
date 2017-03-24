'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    //ESLint syntax validator and code style checker.
    eslint: {
      options: {
        config: './.eslintrc.json',
        reset: true
      },
      target: [
        '*.js'
      ]
    },
    //Mocha test runner check 'test' folder for all the specs.
    mochaTest: {
      test: {
        src: ['./test/**/*.js'],
        options: {
          reporter: 'dot',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: true, // Optionally clear the require cache before running tests (defaults to false)
          colors: true
        }
      }
    }
  });

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');

  //Register tasks
  grunt.registerTask('dev', ['eslint', 'mochaTest']);
  grunt.registerTask('default', ['eslint', 'mochaTest']);
  grunt.registerTask('test', ['eslint', 'mochaTest']);
};
