
module.exports = function(grunt) {
    "use strict";

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

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
        'cdnjquery'
    ]);
}