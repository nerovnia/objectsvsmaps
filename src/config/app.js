module.exports = {
  minElementsInstances: 100,
  maxElementsInstances: 1000000,
  stepElementsInstances: 10,
  
  maxArrLength: 10000,
  maxValueFigure: 5000,
  get maxTestIterations() { 
    return Math.floor(this.maxArrLength * 1.5)
  },
  
  numberOfMeasurements: 5000,

  testDataFile: {
    directory: './data',
    name: 'node-test-time-obj-map.js',
  },
}