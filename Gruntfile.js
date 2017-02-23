module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                camelcase: false,
                indent: 4,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: true,
                sub: true,
                boss: true,
                eqnull: true,
                white: true
            },
            all: ['Gruntfile.js', 'js/*.js', 'js/src/**/*.js', 'js/spec/*.js'],
        },
        jasmine: {
            default: {
                src: 'js/*.js',
                options: {
                    keepRunner: true,
                    hostname: '127.0.0.1',
                    port: 8003,
                    specs: 'js/spec/*spec.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            paths: {
                                'jquery' : './js/vendor/jquery-3.1.1.min',
                                'logon'  : './js/src/modules/logon',
                                'service'  : './js/src/modules/service', 
                                'main'   : './js/main'
                            }
                        }
                    }
                }
            }
        },
        connect: {
            desktop: {
                options: {
                    hostname: '127.0.0.1',
                    keepalive: true,
                    port: 8003,
                    base: '/../'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default',  ['jshint', 'jasmine']);

};
