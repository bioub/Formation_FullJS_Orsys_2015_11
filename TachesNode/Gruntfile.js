
module.exports = function(grunt) {
    "use strict";

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-usemin');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-rev');
    //grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.initConfig({
        useminPrepare: {
            html: 'public/*.html',
        },
        usemin: {
            html: 'dist/*.html'
        },
        rev: {
            assets: {
                files: [{
                    src: [
                        'dist/**/*.{css,js}',
                    ]
                }]
            }
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'public',
                src: ['*.html'],
                dest: 'dist/'
            },
        },
        clean: {
            dist: ["dist/*"],
            tmp: [".tmp"],
        },
        cdnjquery: {
            dist: {}
        }
    });

    grunt.registerMultiTask('cdnjquery', 'Passe de bower à code.jquery.com', function() {
        var htmlfile = 'dist/index.html';

        var srcContent = '../bower_components/jquery/dist/jquery.js';
        var destContent = '//code.jquery.com/jquery-1.11.3.min.js';

        var contenu = grunt.file.read(htmlfile);

        contenu = contenu.replace(srcContent, destContent);

        grunt.file.write(htmlfile, contenu);
    });

    grunt.registerTask('default', [
        'clean:dist',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'rev',
        'copy:dist',
        'usemin',
        'cdnjquery',
        'clean:tmp'
    ]);
}