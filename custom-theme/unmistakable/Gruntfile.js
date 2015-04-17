module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-frontend');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.initConfig({
        frontend: {
            force: false,
            webroot: './build/assets/'
        },
        'frontend-js': {
            main: {
                options: {
                    minify: true,
                    uglify: {}
                },
                files: {
                    'assets/js/main.min.js': ['assets/js/bootstrap.min.js', 'assets/js/jquery.fitvids.js', 'assets/js/imagesloaded.pkgd.min.js', 'assets/js/isotope.pkgd.min.js', 'assets/js/jquery.flickr.js', 'assets/js/jribbble.js', 'assets/js/jquery.instagram.js', 'assets/js/jquery.magnific-popup.min.js', 'assets/js/jqBootstrapValidation.js', 'assets/js/jquery.placeholder.js', 'assets/js/pace.min.js', 'assets/js/prism.js', 'assets/js/skrollr.min.js', 'assets/js/jquery.ticker.js', 'assets/js/jquery.vimeo.api.min.js', 'assets/js/sdk.js', 'assets/js/waveform.js', 'assets/js/smoothscroll.js', 'assets/js/script.js']
                }
            }
        },
        'frontend-css': {
            main: {
                options: {
                    minify: true
                },
                files: [{
                    src: 'assets/css/*.css',
                    dest: 'assets/css/style.min.css'
                }]
            },
        },
        less: {
            main: {
                options: {
                    clean_css: false
                },
                files: {
                    "assets/css/style.css": "assets/less/style.less"
                }
            }
        },
        clean: {
            main: {
                files: [{
                    dot: true,
                    src: ['assets/js/main.min.js', 'assets/css/style.min.css']
                }]
            },
            built: {
                src: ['../../content/themes/unmistakable/**'],
                options: {
                    force: true
                }
            }
        },
        copy: {
            theme: {
                src: ['**'],
                dest: '../../content/themes/unmistakable/',
                expand: true,
                nonull: true,
                options: {
                    noProcess: ['nodule_modules'],
                    force: true
                }
            }
        },
        copyto: {
            theme: {
                files: [{
                    src: ['**'],
                    dest: '../../content/themes/unmistakable/',
                    expand: true,
                    nonull: true,
                    force: true,
                }],
                options: {
                    processContent: function(content, path) {
                        // do something with content or return false to abort copy 
                        return content;
                    }, 
					// array of ignored paths, can be specific files or a glob
                    ignore: ['node_modules', 'nodule_modules{,/**/*}']
                }
            }
        }
    });
    grunt.registerTask('default', ['clean:main', 'frontend-js', 'less', 'frontend-css']);
    grunt.registerTask('deploy', ['clean:built', 'copyto:theme']);
};