/**
 * Compare performance Obbjects vs Maps
 */

const { fillKeys } = require('./src/service.js');
const { writeTest, readTest } = require('./src/manner1.js');

const minElementsInstances = 100;
const maxElementsInstances = 1000000;
const stepElementsInstances = 10;

const maxArrLength = 10000;
const maxNumber = 5000;
const maxTestIterations = Math.floor(maxArrLength * 1.5);

const arrSymbols = fillKeys(maxArrLength);
const testWrittenObj = writeTest(arrSymbols);
const testReadObj = readTest(maxTestIterations, arrSymbols, testWrittenObj.obj, testWrittenObj.map);

const testWriteObj = {
  writeObjTime: testWrittenObj.writeObjTime, 
  writeMapTime: testWrittenObj.writeMapTime,
  diff: testWrittenObj.diff,
};
//const testWriteObj = {writeObjTime, writeMapTime};
console.log(testWriteObj);
//console.log(testWriteObj.diff());
console.log(testReadObj);
//console.log(testReadObj.diff());



/*

totalObjTime = writeObjTime + readObjTime;
totalMapTime = writeMapTime + readMapTime;

console.log(`Write time for Objects = ${writeObjTime} Maps = ${writeMapTime}`);
console.log(`Read time for Objects = ${readObjTime} Maps = ${readMapTime}`);
console.log(`Total time for Objects = ${totalObjTime} Maps = ${totalMapTime}`);
*/
/*
console.time('Test')

console.timeEnd('Test')
*/
