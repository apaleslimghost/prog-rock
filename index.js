#!/usr/bin/env node

var Gauge = require('gauge');
var split = require('split');
var strip = require('strip-ansi');
var lines = parseInt(process.argv[2]);

var gauge = new Gauge();
gauge.setTheme(require('@quarterto/fancy-gauge'));
gauge.show();

var t = setInterval(() => gauge.pulse(), 100);

var count = 0;
process.stdin.on('end', () => clearInterval(t));
process.stdin.pipe(split()).on('data', line => {
	gauge.pulse();
	gauge.show(strip(line), count++ / lines);
});
process.stdin.resume();
