'use strict';

const saveMeasurements = require('./saveMeasurements.js');
const MesurementsData = require('./classes/MeasurementsData.js');
const measurements = require('../data/test-time-for-chart.js');


const res = new MesurementsData();

const stepsLimit = 40;

const approximateSteps = Math.floor(measurements.man1.writeObjTime.length / stepsLimit);

const initTempObject = (sampleObj) => {
  let tObj = {};
  for (const measureKey of Object.keys(sampleObj)) {
    tObj[measureKey] = {};
  }
  return tObj;  
}

let tObj = initTempObject(measurements);


for (let i = 0, j = 0; i < measurements.man1.writeObjTime.length; i++, j++) {
  if (j === approximateSteps - 1) {
    for (const measureKey of Object.keys(measurements)) {
      for (const manKey of Object.keys(measurements[measureKey])) {
        res[measureKey][manKey].push(tObj[measureKey][manKey] / (j + 1));
      }
    }
    j = 0;
    tObj = initTempObject(measurements);
  }
  for (const measureKey of Object.keys(measurements)) {
    for (const manKey of Object.keys(measurements[measureKey])) {
      if (!tObj[measureKey][manKey]) {
        tObj[measureKey][manKey] = 0;
      }
      tObj[measureKey][manKey] += measurements[measureKey][manKey][i];
    }
  }
}

console.log(res.man1.diffRead);
