const { randomNumber } = require('./service.js');

const writeTest = (symbols, maxElementValue) => {
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
    get diff() {
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
    get diff() {
      return this.readObjTime - this.readMapTime;
    }
  }
};

module.exports = {
  writeTest,
  readTest
}