#!/usr/bin/env node

var Gauge = require('gauge');
var split = require('split');
var lines = parseInt(process.argv[2]);

var gauge = new Gauge();
gauge.setTheme(require('@quarterto/fancy-gauge'));

var count = 0;
process.stdin.pipe(split()).on('data', line => {
	gauge.pulse();
	gauge.show(line, count++ / lines);
});
process.stdin.resume();
