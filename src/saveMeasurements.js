'use strict';

const fs = require('node:fs');
const path = require('path');

const createDirectory = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
};

const saveMeasurements = (data, directoryPath, filename) => {
  if (data) {
    const content = `
    const dataMeasurements = '${data}';
    const measurements = JSON.parse(dataMeasurements);
    `;
    createDirectory(directoryPath);
    fs.writeFile(`${directoryPath}/${filename}`, content, (err) => {
      if (err) throw err;
      console.log(`New file size: ${data.length}`);
    });
  }
}

module.exports = saveMeasurements;
