module.exports = function (grunt) {
	grunt.registerTask("compileAssets", [
		"clean:dev",
		"jst:dev",
		"sass:dev",
		"browserify",
		"copy:dev",
		"babelBuild",
    	"browserify",
		"coffee:dev"
	]);
};
