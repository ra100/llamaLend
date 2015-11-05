module.exports = function (grunt) {
  var pipeline = require("../pipeline");

  grunt.config.set("babel", {
    options: {
      sourceMap: false,
      presets: ["react", "es2015"]
    },
    dist: {
      files: [{
          expand: true,
          cwd: pipeline.es6To5SrcJSDir,
          src: ["**/*.jsx"],
          dest: pipeline.es6To5BuildPath
          },
        {
          src: "./assets/js/app.jsx",
          dest: "./assets/js/app.js"
        }
        ]
    }
  });
  grunt.loadNpmTasks("grunt-babel");
};
