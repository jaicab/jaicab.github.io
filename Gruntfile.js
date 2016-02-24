module.exports = function(grunt) {

  var the_tasks = [
    'uglify', 
    'sass',
    'cssmin',
  ];

  var the_tasks_watch = Array.prototype.slice.call(the_tasks, 0);
  the_tasks_watch.push('watch');

  grunt.initConfig({
    uglify: {
      options: {
      },
      dist: {
        files: {
          // ASYNC JS: Fonts
          'js/async.min.js': [
            '_src/js/components/onloadCSS.js',
            '_src/js/components/FontFaceObserver.js', 
            '_src/js/async.js'
          ],
          // ASYNC JS launcher
          '_includes/js/async.critical.min.js': [
            '_src/js/async.critical.js'
          ],
          // Critical JS: Font loaded check and loadCSS
          '_includes/js/critical.min.js': [
            '_src/js/components/loadCSS.js',
            '_src/js/critical.js'
          ]
        }
      },

    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          '_includes/css/critical.min.css': '_src/scss/critical.scss',
          'css/full.css': '_src/scss/full.scss',
          'css/nojs.css': '_src/scss/nojs.scss'
        }
      }
    },

    cssmin: {
      options: {
      },
      dist: {
        files: {
          '_includes/css/critical.min.css': ['_includes/css/critical.min.css'],
          'css/full.css': ['css/full.css'],
          'css/nojs.css': ['css/nojs.css']
        }
      }
    },

    watch: {
      files: ['_src/**.js', '**/*.scss'],
      tasks: the_tasks,
    },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', the_tasks);
  grunt.registerTask('dev', the_tasks_watch);

};