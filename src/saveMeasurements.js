'use strict';

const fs = require('node:fs');

const saveMeasurements = (data) => {
  if (data) {
    fs.writeFile('node-test-time-obj-map.js', content, (err) => {
      if (err) throw err;
      console.log(`New file size: ${content.length}`);
    });
  }
}

module.exports = {
  saveMeasurements,
};