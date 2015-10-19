module.exports = function(grunt){

	//project configurations
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					quiet: false,
					ui: 'tdd'
				},
				src: ['test/**/*.js']
			}
		}
	});

	//Load Tasks
	grunt.loadNpmTasks('grunt-mocha-test');

	//Default grunt Task
	grunt.registerTask('default',['mochaTest']);
}