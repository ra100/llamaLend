module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'react:dev',
		'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
