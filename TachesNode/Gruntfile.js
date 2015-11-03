
module.exports = function(grunt) {
    "use strict";

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        useminPrepare: 'public/*.html',
        //copy: {
        //    dist: {
        //        expand: true,
        //        cwd: 'public',
        //        src: ['*.{js,css,html}'],
        //        dest: 'dist/'
        //    },
        //},
        clean: {
            dist: ["dist/*"],
        },
    });

    grunt.registerTask('default', [
        'clean:dist',
        'copy:dist'
    ]);
}