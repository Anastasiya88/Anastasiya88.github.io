module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist_grunt/script.min.js'
            }
        },
        uglify: {
            dist: {
                src: 'dist_grunt/script.main.js',
                dest: 'dist_grunt/script.min.js'
            }
        },
        cssmin: {
          with_banner: {
            options: {
              banner: '/* Combined CSS-files */'
            },

            files: {
              'dist_grunt/style.min.css' : ['src/css/*.css']
            }
          }
        },
        watch: {
          scripts: {
            files: ['src/js/*.js'],
            tasks: ['concat', 'uglify']
          },
          css: {
            files: ['src/css/*.css'],
            tasks: ['cssmin']
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['concat','uglify', 'cssmin', 'watch']);

};
