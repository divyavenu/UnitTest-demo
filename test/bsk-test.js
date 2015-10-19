var expect = require('expect.js');
var Frame = require('../src/Frame.js')

suite('Frame Testing', function(){

	test('Creating Frame', function(done){
		var frame = new Frame(9,5);
		expect(frame.firstThrow()).to.eql(9);
		expect(frame.secondThrow()).to.eql(5);
		done();
	});

	test('Frame Score', function(done){
		var frame = new Frame(1,0);
		expect(frame.sum()).to.eql(1);
		done();
	});

	test('Todo', function(){
	});

});