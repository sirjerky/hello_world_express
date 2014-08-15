"use strict";

var $ = require('jquery');
var Post = require('./post');
var pal = require('./palindrome');
var mean = require('./mean');

var how_to_use_browserify = new Post("How to use browserify");

$('#pal').on('click', function(){
	console.log(pal($('#checkPal').val()));
});
$('body').append('<h2>' + how_to_use_browserify.title + '<h2>');

$('#mean').on('click', function(){
	console.log(mean([1, 2, 3]));
});