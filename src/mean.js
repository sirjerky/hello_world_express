"use strict";

module.exports = function(data){
	var sum = 0;
	for(var i=0; i < data.length; i++){
		sum += data[i];
	}
	return sum / (data.length);
};