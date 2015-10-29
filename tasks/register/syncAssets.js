module.exports = function (grunt) {
	grunt.registerTask("syncAssets", [
		"jst:dev",
		"sass:dev",
		"browserify",
		"sync:dev",
		"coffee:dev"
	]);
};
