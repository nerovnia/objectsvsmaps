'use strict';

const measurements = require('../data/test-time-chart.js');

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

console.log(res.man1.writeMapTime.length);
