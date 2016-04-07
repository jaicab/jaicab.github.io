module.exports = function(grunt) {

  var the_tasks = [
    'uglify',
    'sass',
    'postcss',
    'cssmin'
  ];

  var the_tasks_watch = Array.prototype.slice.call(the_tasks, 0);
  the_tasks_watch.push('watch');

  grunt.initConfig({
    uglify: {
      options: {
      },
      dist: {
        files: {
          // Fonts
          'js/async.min.js': [
            '_src/js/components/FontFaceObserver.js',
            '_src/js/async.js'
          ],
          // Critical JS: Enhance.js
          '_includes/js/critical.min.js': [
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
          'css/syntax.css': '_src/scss/syntax.scss',
          'css/ie.css': '_src/scss/ie.scss',
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
          'css/nojs.css': ['css/nojs.css'],
          'css/ie.css': ['css/ie.css'],
          'css/syntax.css': ['css/syntax.css']
        }
      }
    },

    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: ['css/*.css', '_includes/css/*.css']
      }
    },

    watch: {
      files: ['_src/**.js', '_src/**/*.scss'],
      tasks: the_tasks,
    },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', the_tasks);
  grunt.registerTask('dev', the_tasks_watch);

};
