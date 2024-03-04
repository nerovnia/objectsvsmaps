/**
 * Compare performance Objects vs Maps
 */

const performanceTest = require('./src/test.js');

const minElementsInstances = 100;
const maxElementsInstances = 1000000;
const stepElementsInstances = 10;

const maxArrLength = 10000;
const maxValueFigure = 5000;
const maxTestIterations = Math.floor(maxArrLength * 1.5);


console.log(performanceTest(maxArrLength, maxTestIterations, maxValueFigure));

/*
console.log(`Write time for Objects = ${writeObjTime} Maps = ${writeMapTime}`);
console.log(`Read time for Objects = ${readObjTime} Maps = ${readMapTime}`);
console.log(`Total time for Objects = ${totalObjTime} Maps = ${totalMapTime}`);
*/
/*
console.time('Test')

console.timeEnd('Test')
*/
