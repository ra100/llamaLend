module.exports = function (grunt) {
	grunt.registerTask("compileAssets", [
		"clean:dev",
		"jst:dev",
		"sass:dev",
		"browserify",
		"copy:dev",
		"coffee:dev",
		"react:dev"
	]);
};
