module.exports = function(grunt) {

  var originalFiles = [
    'js/app/main/main_controller.js',
    'js/app/registration/registration_controller.js'
  ]

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/dist/app.min.js': [originalFiles]
        }
      }
    },


    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      src: ['js/**/*.js'],
      options: {
        specs: ['spec/**/*spec.js'],
        vendor: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jasmine')
  grunt.registerTask('default', ['uglify'])

};
