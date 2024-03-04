const { fillKeys } = require('./service.js');
//const { writeTest, readTest } = require('./manner1.js');
const { writeTest, readTest } = require('./manner2.js');

const performanceTest = (maxArrLength, maxTestIterations, maxElementValue) => {
  const arrSymbols = fillKeys(maxArrLength);
  const testWriteObj = writeTest(arrSymbols, maxElementValue);
  const testReadObj = readTest(maxTestIterations, arrSymbols, testWriteObj.obj, testWriteObj.map);

  const result = {
    ...testWriteObj,
    ...testReadObj
  }

  delete result.obj;
  delete result.map;
  
  return result;
}


module.exports = performanceTest;