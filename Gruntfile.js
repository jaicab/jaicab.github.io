module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
      },
      async: {
        files: {
          'js/async.min.js': [
            'js/components/onloadCSS.js',
            'js/components/FontFaceObserver.js', 
            'js/async.js'
          ]
        }
      },

      async_critical: {
        files: {
          '_includes/js/async.critical.min.js': [
            'js/async.critical.js'
          ]
        }
      },

      critical: {
        files: {
          '_includes/js/critical.min.js': [
            'js/components/loadCSS.js',
            'js/critical.js'
          ]
        }
      },
    },

    cssmin: {
      options: {
      },
      target: {
        files: {
          '_includes/css/critical.min.css': ['_site/css/critical.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  
  grunt.registerTask('default', [
    'uglify:async', 
    'uglify:async_critical', 
    'uglify:critical',
    'cssmin'
  ]);

};