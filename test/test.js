/* global describe, it */
'use strict';

//var assert = require('assert');
var expect = require('chai').expect;

describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			//assert.equal(-1, [1,2,3].indexOf(5));
			expect([1,2,3].indexOf(5)).to.equal(-1);
			//assert.equal(-1, [1,2,3].indexOf(0));
		});
		it('should return 3 when asked for length', function(){
			expect([1,2,3].length).to.equal(3);
			//assert.equal(3, [1,2,3].length);
		});
	});
});