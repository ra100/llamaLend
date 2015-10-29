module.exports = function (grunt) {
	grunt.registerTask("compileAssets", [
		"clean:dev",
		"babelBuild",
		"jst:dev",
		"sass:dev",
		"copy:dev",
		"browserify",
		"coffee:dev"
	]);
};
