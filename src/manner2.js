const { randomNumber } = require('./service.js');

const getReadTestTime = (collection, element, callback) => {
  let startTime = 0;
  let endTime = 0;
  let test = null;

  startTime = performance.now();
  test = callback(collection, element);
  endTime = performance.now();
  return endTime - startTime;
}

const getWriteTestTime = () => {
  
}


const writeTest = (symbols, maxElementValue) => {
  console.log(maxElementValue);
  if (!Array.isArray(symbols)) return {};
  const obj = {};
  const map = new Map();
  let writeObjTime = 0;
  let writeMapTime = 0;
  for (const symbol of symbols) {
    const num = randomNumber(maxElementValue);
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
    get diffWrite() {
      return this.writeObjTime - this.writeMapTime;
    }
  }
};

const readTest = (maxIterations, symbols, obj, map) => {
  const result = {
    readObjTime: 0,
    readMapTime: 0,
    get diffRead() {
      return this.readObjTime - this.readMapTime;
    }
  };

  for (let i = 0; i < maxIterations; i++) {
    const num = randomNumber(symbols.length - 1);
    result.readObjTime += getReadTestTime(obj, symbols[num], (collection, element) => collection[element]);
    result.readMapTime += getReadTestTime(map, symbols[num], (collection, element) => collection.get(element));
  }
  return result;
};

module.exports = {
  writeTest,
  readTest
}