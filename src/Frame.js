var Frame = function(i,j){
	this._firstThrow = i;
	this._secondThrow = j;
};

Frame.prototype.firstThrow = function(){
	return this._firstThrow;
};

Frame.prototype.secondThrow = function(){
	return this._secondThrow;
};

Frame.prototype.sum = function(){
	return this._firstThrow + this._secondThrow;
};

module.exports = Frame;

