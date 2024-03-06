'use strict';

const { fillKeys } = require('./service.js');
const { man1 } = require('./manner1.js');
const { man2 } = require('./manner2.js');

const performanceTest = (maxArrLength, maxTestIterations, maxElementValue) => {
  const arrSymbols = fillKeys(maxArrLength);
  const testWriteObj1 = man1.writeTest(arrSymbols, maxElementValue);
  const testReadObj1 = man1.readTest(maxTestIterations, arrSymbols, testWriteObj1.obj, testWriteObj1.map);
  const testWriteObj2 = man2.writeTest(arrSymbols, maxElementValue);
  const testReadObj2 = man2.readTest(maxTestIterations, arrSymbols, testWriteObj2.obj, testWriteObj2.map);

  const result = {
    man1: {
      ...testWriteObj1,
      ...testReadObj1,
    },
    man2: {
      ...testWriteObj2,
      ...testReadObj2
    }
  }

  delete result.man1.obj;
  delete result.man1.map;
  delete result.man2.obj;
  delete result.man2.map;
  
  return result;
}


module.exports = performanceTest;