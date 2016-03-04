#!/usr/bin/env node

var Gauge = require('gauge');
var split = require('split');
var strip = require('strip-ansi');
var lines = parseInt(process.argv[2]);


var gauge = new Gauge();
gauge.setTheme(require('@quarterto/fancy-gauge'));
gauge.show('waiting to start', 0.001);

var t = setInterval(() => gauge.pulse(), 50);

var count = 0;
process.stdin.on('end', () => clearInterval(t));
process.stdin.pipe(split()).on('data', line => {
	gauge.pulse();
	gauge.show(strip(line), count++ / lines);
});
process.stdin.resume();
