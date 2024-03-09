'use strict';

const measurements = require('../data/test-time-chart.js');
const saveMeasurements = require('./saveMeasurements.js');
const MesurementsData = require('./classes/MeasurementsData.js');

const res = new MesurementsData();

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
