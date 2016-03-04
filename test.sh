#!/bin/bash

for i in {1..100}; do
	sleep 10
	echo $i
done | node index.js 100
