const { randomNumber } = require('./service.js');

const getReadTestTime = (collection, element, callback) => {
  let startTime = 0;
  let endTime = 0;

  startTime = performance.now();
  callback(collection, element);
  endTime = performance.now();

  return endTime - startTime;
}

const getWriteTestTime = (collection, element, value, callback) => {
  let startTime = 0;
  let endTime = 0;

  startTime = performance.now();
  callback(collection, element, value);
  endTime = performance.now();

  return endTime - startTime;
}

const writeTest = (symbols, maxElementValue) => {
  if (!Array.isArray(symbols)) return {};
  const obj = {};
  const map = new Map();
  let writeObjTime = 0;
  let writeMapTime = 0;
  for (const symbol of symbols) {
    const num = randomNumber(maxElementValue);
    writeObjTime += getWriteTestTime(obj, symbol, num, (collection, element, value) => collection[element] = value);
    writeMapTime += getWriteTestTime(map, symbol, num, (collection, element, value) => collection.set(element, value));
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
  man2: {
    writeTest,
    readTest
  }
}