/**
 * Compare performance Obbjects vs Maps
 */

const minElementsInstances = 100;
const maxElementsInstances = 100000000000;
const stepElementsInstances = 10;

const randomNumber = (number) => Math.floor(maxArrLength * number);

const maxArrLength = 1000000;
const maxNumber = 5000;
const maxTestIterations = Math.floor(maxArrLength * 1.5);

const obj = {};
const map = new Map();

let writeObjTime = 0;
let writeMapTime = 0;

let readObjTime = 0;
let readMapTime = 0;

let totalObjTime = 0;
let totalMapTime = 0;


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

const writeTest = () => {
  for (const symbol of arrSymbols) {
    const num = Math.floor(Math.random() * maxNumber);

    let startTime = performance.now();
    obj[symbol] = num;
    let endTime = performance.now();
    writeObjTime += endTime - startTime;

    startTime = performance.now();
    map.set(symbol, num);
    endTime = performance.now();
    writeMapTime += endTime - startTime;
  }
};

const readTest = () => {
  for (let i = 0; i < maxTestIterations; i++) {
    const num = Math.floor(Math.random() * (arrSymbols.length - 1));

    let startTime = performance.now();
    let test = obj[arrSymbols[num]];
    let endTime = performance.now();
    readObjTime += endTime - startTime;

    startTime = performance.now();
    test = map.get(arrSymbols[num]);
    endTime = performance.now();
    writeMapTime += endTime - startTime;
  }
};



const arrSymbols = fillKeys(maxArrLength);









totalObjTime = writeObjTime + readObjTime;
totalMapTime = writeMapTime + readMapTime;

console.log(`Write time for Objects = ${writeObjTime} Maps = ${writeMapTime}`);
console.log(`Read time for Objects = ${readObjTime} Maps = ${readMapTime}`);
console.log(`Total time for Objects = ${totalObjTime} Maps = ${totalMapTime}`);

/*
console.time('Test')

console.timeEnd('Test')
*/
