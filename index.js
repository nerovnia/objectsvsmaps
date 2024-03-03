/**
 * Compare performance Obbjects vs Maps
 */

const minElementsInstances = 100;
const maxElementsInstances = 1000000;
const stepElementsInstances = 10;

const randomNumber = (number) => Math.floor(Math.random() * number);

const maxArrLength = 10000;
const maxNumber = 5000;
const maxTestIterations = Math.floor(maxArrLength * 1.5);


//let totalObjTime = 0;
//let totalMapTime = 0;


const getRundNumber = (max) => {
  return Math.floor(Math.random() * max);
}

const fillKeys = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Symbol());
  }
  return arr;
}

const writeTest = (symbols) => {
  if (!Array.isArray(symbols)) return {};
  const obj = {};
  const map = new Map();
  let writeObjTime = 0;
  let writeMapTime = 0;
  for (const symbol of symbols) {
    const num = randomNumber(maxNumber);
    let startTime = performance.now();
    let endTime = performance.now();

    startTime = performance.now();
    obj[symbol] = num;
    endTime = performance.now();
    writeObjTime += endTime - startTime;

    startTime = performance.now();
    map.set(symbol, num);
    endTime = performance.now();
    writeMapTime += endTime - startTime;
  }
  return {
    obj,
    map,
    writeObjTime,
    writeMapTime,
    diff() {
      return this.writeObjTime - this.writeMapTime;
    }
  }
};

const readTest = (maxIterations, symbols, obj, map) => {
  let readObjTime = 0;
  let readMapTime = 0;

  for (let i = 0; i < maxIterations; i++) {
    const num = randomNumber(symbols.length - 1);
    let startTime = performance.now();
    let endTime = performance.now();

    startTime = performance.now();
    let test = obj[symbols[num]];
    endTime = performance.now();
    readObjTime += endTime - startTime;

    startTime = performance.now();
    test = map.get(symbols[num]);
    endTime = performance.now();
    readMapTime += endTime - startTime;
  }
  return {
    readObjTime,
    readMapTime,
    diff() {
      return this.readObjTime - this.readMapTime;
    }
  }
};

const arrSymbols = fillKeys(maxArrLength);
const testWrittenObj = writeTest(arrSymbols);
const testReadObj = readTest(maxTestIterations, arrSymbols, testWrittenObj.obj, testWrittenObj.map);
const testWriteObj = {
  writeObjTime: testWrittenObj.writeObjTime, 
  writeMapTime: testWrittenObj.writeMapTime,
  diff: testWrittenObj.diff(),
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
