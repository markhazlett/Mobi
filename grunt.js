module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '// <%= pkg.title %> v<%= pkg.version %>\n' +
              '//\n' +
              '// Copyright (c) 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
              '// Distributed under MIT License\n' +
              '//\n' +
              '// Documentation and full license available at:\n'
    },
    concat: {
      dist: {
        src: [
          "<banner:meta.banner>",
          "src/js/app.js",
          "src/js/support/*.js",
          "src/js/routers/*.js",
          "src/js/views/*.js"
        ],
        dest: "dist/<%= pkg.name.split('-')[0] %>.js"
      }
    },
    min: {
      browser: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>-min.js'
      },
      amd: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>-amd.js'
      }
    },
    src: {
      options: this.options,
      globals: {
        _: true,
        Mobi: true,
        Backbone: true,
        App: true
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    buster: {
      test: {
        'config': 'buster.js',
        'color': 'none',
        'config-group': 'Browser'
      },
      server: {
        'port': '1111'
      }
    },
    lint: {
      files: ['grunt.js', 'src/js/**/*.js', 'tests/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        node: true,
        strict: false
      },
      globals: {
        Backbone: true,
        _: true,
        $: true,
        buster: true,
        assert: true,
        refute: true,
        define: true,
        modernizr: true
      }
    },
    uglify: {}
  });

  grunt.registerTask('default', 'lint buster concat min');

  grunt.loadNpmTasks('grunt-buster');
};