#!/bin/bash

for i in {1..100}; do
	echo $i
	sleep 0.1
done | node index.js 100
