'use strict';

const measurements = require('../data/test-time-chart.js');
const saveMeasurements = require('./saveMeasurements.js');

const mans = ['man1', 'man2'];

const res = 
  {
    man1: {
      writeObjTime: [],
      writeMapTime: [],
      diffWrite: [],
      readObjTime: [],
      readMapTime: [],
      diffRead: [],
    },
    man2: {
      writeObjTime: [],
      writeMapTime: [],
      diffWrite: [],
      readObjTime: [],
      readMapTime: [],
      diffRead: [],
    }
  };

for (const measure of measurements) {
  for(const man of Object.keys(res)) {
    for(const key of Object.keys(res[man])) {
      res[man][key].push(measure[man][key]);
    }
  }
}

const testDataDirectory = './data/';
const testDataFileName = 'test-time-for-chart.js';
saveMeasurements(JSON.stringify(res), testDataDirectory, testDataFileName);
