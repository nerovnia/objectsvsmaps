'use strict';

/**
 * Compare performance Objects vs Maps
 */

const performanceTest = require('./src/test.js');
const saveMeasurements = require('./src/saveMeasurements.js');

const testDataDirectory = './data';
const testDataFileName = 'node-test-time-obj-map.js';

const minElementsInstances = 100;
const maxElementsInstances = 1000000;
const stepElementsInstances = 10;

const maxArrLength = 10000;
const maxValueFigure = 5000;
const maxTestIterations = Math.floor(maxArrLength * 1.5);

const numberOfMeasurements = 5000;
const arrMeasurements = [];



for (let i = 0; i < numberOfMeasurements; i++) {
  arrMeasurements.push(performanceTest(maxArrLength, maxTestIterations, maxValueFigure));
}


saveMeasurements(JSON.stringify(arrMeasurements), testDataDirectory, testDataFileName);
//console.log();

/*
console.log(`Write time for Objects = ${writeObjTime} Maps = ${writeMapTime}`);
console.log(`Read time for Objects = ${readObjTime} Maps = ${readMapTime}`);
console.log(`Total time for Objects = ${totalObjTime} Maps = ${totalMapTime}`);
*/
/*
console.time('Test')

console.timeEnd('Test')
*/
