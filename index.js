'use strict';

var loaderUtils = require("loader-utils");
var request = require('request');
var concat = require('concat-stream');
var sizeOf = require('image-size');
var getFileType = require('file-type');
var assign = require('object-assign');

var MIMES = [
	'image/jpeg',
	'image/pjpeg',
	'image/gif',
	'image/png'
];

module.exports = function(content) {
	this.cacheable && this.cacheable();

	var query = loaderUtils.parseQuery(this.query);
	var callback = this.async();

	var options = assign({} , {
		bypassOnDebug: false
	}, query)

	if (this.debug === true && options.bypassOnDebug === true) {
		return callback(null, content);
	}

	var filetype = getFileType(content);

	if ( !filetype || MIMES.indexOf( filetype.mime ) == -1 ) {
		return callback(null, content);
	}

	var imageSize = sizeOf(content);

	var url = "https://placehold.it/" + imageSize.width + "x" + imageSize.height + "." + imageSize.type; 

	var stream = request( url );

	stream.on('error', function (error) {
		callback(error, content);
	});

	stream.pipe(concat(function(imageBuffer) {
		callback(null, imageBuffer);
	}));

};

module.exports.raw = true;