#!/bin/bash

cd ${DIRECTORY}/slides
npx slidev build --base /${DIRECTORY}/ -o ../../docs/${DIRECTORY}
