'use strict';

/**
 * Compare performance Objects vs Maps
 */

const performanceTest = require('./src/test.js');
const saveMeasurements = require('./src/saveMeasurements.js');
const { 
  maxArrLength, 
  maxTestIterations, 
  maxValueFigure, 
  numberOfMeasurements 
} = require('./src/config/app.js');
const { testDataFile } = require('./src/config/app.js');

const arrMeasurements = [];

for (let i = 0; i < numberOfMeasurements; i++) {
  arrMeasurements.push(performanceTest(maxArrLength, maxTestIterations, maxValueFigure));
}

saveMeasurements(JSON.stringify(arrMeasurements), testDataFile.directory, testDataFile.name);
