'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'public',
        dist: 'public/dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true,
                debounceDelay: 1000
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/css/*.css',
                    '{.tmp,<%= yeoman.app %>}/javascripts/**/*.js',
                    '<%= yeoman.app %>/images/*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.app %>/javascripts/templates/**/*.{ejs,mustache,hbs}'
                ]
                
            },
            all: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/css/*.css',
                    '{.tmp,<%= yeoman.app %>}/javascripts/**/*.js',
                    '<%= yeoman.app %>/images/*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.app %>/javascripts/templates/**/*.{ejs,mustache,hbs}'
                ],
                tasks: ['handlebars', 'concat']
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },

        concat: {
            'public/dist/css/main.css': [
                'public/css/main.css'
            ],

            'public/dist/javascripts/vendor.js':
            [ 
                'bower_components/jquery/dist/jquery.js',
                'bower_components/underscore/underscore.js',
                'bower_components/backbone/backbone.js',
                'bower_components/moment/moment.js',
                'bower_components/handlebars/handlebars.min.js',
                'bower_components/Backbone.Handlebars/lib/backbone_handlebars.js',
                'bower_components/jquery-ui/ui/minified/jquery-ui.min.js',
                'bower_components/backbone.stickit/backbone.stickit.js',
            ],

            'public/dist/javascripts/main.js':
            [
                'public/javascripts/models/icon.js',
            ],
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST'
                },
                files: {
                    '<%= yeoman.app %>/dist/javascripts/templates.js': ['<%= yeoman.app %>/javascripts/templates/**/*.hbs']
                }
            }
        },
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('root/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'createDefaultTemplate',
            'handlebars',
            'connect:livereload',
            'open:server',
            'watch:livereload'
        ]);
    });


    grunt.registerTask('build', [
        'clean:dist',
        'createDefaultTemplate',
        'handlebars',
        'concat',
    ]);

};
