module.exports = function(grunt) {

var isDev = process.env.NODE_ENV == 'development' ? true : false;
  grunt.initConfig({
    uglify: {
      main: {
        files: {'www/app.js': [
          'lib/bower_components/jquery/dist/jquery.min.js',
          'lib/bower_components/bootstrap/dist/js/bootstrap.min.js',
          'lib/bower_components/angular/angular.min.js',
          'node_modules/angular-ui-router/release/angular-ui-router.min.js',
          'app/app.js',
          'app/**/*.js',
          ]
        }
      },
      options: {
        sourceMap: isDev,
        sourceMapIncludeSources: isDev,
        preserveComments: false,
        compress: (isDev ? false : {}),
        mangle: (isDev ? false : {}),
        beautify: isDev
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};