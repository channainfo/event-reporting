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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', ['uglify']);

};
