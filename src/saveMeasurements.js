'use strict';

const fs = require('node:fs');
const path = require('path');

const createDirectory = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
};

const saveMeasurements = (data, directoryPath) => {
  if (data) {
    createDirectory(directoryPath);
    fs.writeFile(`${directoryPath}/node-test-time-obj-map.js`, data, (err) => {
      if (err) throw err;
      console.log(`New file size: ${data.length}`);
    });
  }
}

module.exports = saveMeasurements;