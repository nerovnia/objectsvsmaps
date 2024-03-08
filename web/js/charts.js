const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');

class DiscretChartData {
  constructor() {
    this.diffReadMan1 = [];
    this.diffWriteMan1 = [];
    this.readMapTimeMan1 = [];
    this.readObjTimeMan1 = [];
    this.writeMapTimeMan1 = [];
    this.writeObjTimeMan1 = [];
    this.diffReadMan2 = [];
    this.diffWriteMan2 = [];
    this.readMapTimeMan2 = [];
    this.readObjTimeMan2 = [];
    this.writeMapTimeMan2 = [];
    this.writeObjTimeMan2 = [];
  }
}
class IncreasedChartData {
  constructor() {
    this.sumDiffReadMan1 = [];
    this.sumDiffWriteMan1 = [];
    this.sumReadMapTimeMan1 = [];
    this.sumReadObjTimeMan1 = [];
    this.sumWriteMapTimeMan1 = [];
    this.sumWriteObjTimeMan1 = [];
    this.sumDiffReadMan2 = [];
    this.sumDiffWriteMan2 = [];
    this.sumReadMapTimeMan2 = [];
    this.sumReadObjTimeMan2 = [];
    this.sumWriteMapTimeMan2 = [];
    this.sumWriteObjTimeMan2 = [];
  }
}


class ChartData {
  constructor(data, chartSteps) {
    this.discret = new DiscretChartData();
    this.increased = new IncreasedChartData();
    this.#dataApproximation(data, chartSteps);
    this.axis_x = this.#getAxisX(chartSteps);
  }

  #getAxisX(chartSteps) {
    const x = [];
    for(let i = 0; i< chartSteps; i++) {
      x.push(i.toString(10));
    }
    return x;
  }

  #dataApproximation(data, chartSteps) {
    console.log(data);
    console.log('------------------');
    console.log(Object.keys(data[0]?.man1));
    console.log('------------------');
    let surrStep = 0; 
    const oneStep = Math.floor(data.length / chartSteps);
    for(let i = 0; i < chartSteps; i++) {
      let diffReadMan1 = 0;
      let diffWriteMan1 = 0;
      let readMapTimeMan1 = 0;
      let readObjTimeMan1 = 0;
      let writeMapTimeMan1 = 0;
      let writeObjTimeMan1 = 0;
  
      let diffReadMan2 = 0;
      let diffWriteMan2 = 0;
      let readMapTimeMan2 = 0;
      let readObjTimeMan2 = 0;
      let writeMapTimeMan2 = 0;
      let writeObjTimeMan2 = 0;
      for(let j = 0; (j < oneStep) || ((i * chartSteps + j) < data.length); j++) {
        diffReadMan1 += data[i * chartSteps + j].man1.diffRead;
        diffWriteMan1 += data[i * chartSteps + j].man1.diffWrite;
        readMapTimeMan1 += data[i * chartSteps + j].man1.readMapTime;
        readObjTimeMan1 += data[i * chartSteps + j].man1.readObjTime;
        writeMapTimeMan1 += data[i * chartSteps + j].man1.writeMapTime;
        writeObjTimeMan1 += data[i * chartSteps + j].man1.writeObjTime;
  
        diffReadMan2 += data[i * chartSteps + j].man2.diffRead;
        diffWriteMan2 += data[i * chartSteps + j].man2.diffWrite;
        readMapTimeMan2 += data[i * chartSteps + j].man2.readMapTime;
        readObjTimeMan2 += data[i * chartSteps + j].man2.readObjTime;
        writeMapTimeMan2 += data[i * chartSteps + j].man2.writeMapTime;
        writeObjTimeMan2 += data[i * chartSteps + j].man2.writeObjTime;
      }
  
      this.discret.diffReadMan1.push(diffReadMan1 / chartSteps);
      this.discret.diffWriteMan1.push(diffWriteMan1 / chartSteps);
      this.discret.readMapTimeMan1.push(readMapTimeMan1 / chartSteps);
      this.discret.readObjTimeMan1.push(readObjTimeMan1 / chartSteps);
      this.discret.writeMapTimeMan1.push(writeMapTimeMan1 / chartSteps);
      this.discret.writeObjTimeMan1.push(writeObjTimeMan1 / chartSteps);
  
      this.discret.diffReadMan2.push(diffReadMan2 / chartSteps);
      this.discret.diffWriteMan2.push(diffWriteMan2 / chartSteps);
      this.discret.readMapTimeMan2.push(readMapTimeMan2 / chartSteps);
      this.discret.readObjTimeMan2.push(readObjTimeMan2 / chartSteps);
      this.discret.writeMapTimeMan2.push(writeMapTimeMan2 / chartSteps);
      this.discret.writeObjTimeMan2.push(writeObjTimeMan2 / chartSteps);
    }
  }
}

const chartSteps = 40;
const chartData = new ChartData(measurements, chartSteps);
console.log(chartData);

/*
for(const el of measurements) {

  chartData.ch2.diffReadMan1.push(el.man1.diffRead);
  chartData.ch2.diffWriteMan1.push(el.man1.diffWrite);
  chartData.ch2.readMapTimeMan1.push(el.man1.readMapTime);
  chartData.ch2.readObjTimeMan1.push(el.man1.readObjTime);
  chartData.ch2.writeMapTimeMan1.push(el.man1.writeMapTime);
  chartData.ch2.writeObjTimeMan1.push(el.man1.writeObjTime);
  chartData.ch2.diffReadMan2.push(el.man2.diffRead);
  chartData.ch2.diffWriteMan2.push(el.man2.diffWrite);
  chartData.ch2.readMapTimeMan2.push(el.man2.readMapTime);
  chartData.ch2.readObjTimeMan2.push(el.man2.readObjTime);
  chartData.ch2.writeMapTimeMan2.push(el.man2.writeMapTime);
  chartData.ch2.writeObjTimeMan2.push(el.man2.writeObjTime);



  
  chartData.ch1.sumDiffReadMan1 += el.man1.diffRead;
  chartData.ch1.sumDiffWriteMan1 += el.man1.diffWrite;
  chartData.ch1.sumReadMapTimeMan1 += el.man1.readMapTime;
  chartData.ch1.sumReadObjTimeMan1 += el.man1.readObjTime;
  chartData.ch1.sumWriteMapTimeMan1 += el.man1.writeMapTime;
  chartData.ch1.sumWriteObjTimeMan1 += el.man1.writeObjTime;
  chartData.ch1.sumDiffReadMan2 += el.man2.diffRead;
  chartData.ch1.sumDiffWriteMan2 += el.man2.diffWrite;
  chartData.ch1.sumReadMapTimeMan2 += el.man2.readMapTime;
  chartData.ch1.sumReadObjTimeMan2 += el.man2.readObjTime;
  chartData.ch1.sumWriteMapTimeMan2 += el.man2.writeMapTime;
  chartData.ch1.sumWriteObjTimeMan2 += el.man2.writeObjTime;

  chartData.ch1.diffReadMan1.push(chartData.ch1.sumDiffReadMan1);
  chartData.ch1.diffWriteMan1.push(chartData.ch1.sumDiffWriteMan1);
  chartData.ch1.readMapTimeMan1.push(chartData.ch1.sumReadMapTimeMan1);
  chartData.ch1.readObjTimeMan1.push(chartData.ch1.sumReadObjTimeMan1);
  chartData.ch1.writeMapTimeMan1.push(chartData.ch1.sumWriteMapTimeMan1);
  chartData.ch1.writeObjTimeMan1.push(chartData.ch1.sumWriteObjTimeMan1);
  chartData.ch1.diffReadMan2.push(chartData.ch1.sumDiffReadMan2);
  chartData.ch1.diffWriteMan2.push(chartData.ch1.sumDiffWriteMan2);
  chartData.ch1.readMapTimeMan2.push(chartData.ch1.sumReadMapTimeMan2);
  chartData.ch1.readObjTimeMan2.push(chartData.ch1.sumReadObjTimeMan2);
  chartData.ch1.writeMapTimeMan2.push(chartData.ch1.sumWriteMapTimeMan2);
  chartData.ch1.writeObjTimeMan2.push(chartData.ch1.sumWriteObjTimeMan2);
  
}
*/
/*
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: x,
    datasets: [
    {
      label: 'diffReadMan1',
      data: chartData.ch1.diffReadMan1,
      borderWidth: 1
    },
    {
      label: 'diffWriteMan1',
      data: chartData.ch1.diffWriteMan1,
      borderWidth: 1
    },
    {
      label: 'readMapTimeMan1',
      data: chartData.ch1.readMapTimeMan1,
      borderWidth: 1
    },
    {
      label: 'readObjTimeMan1',
      data: chartData.ch1.readObjTimeMan1,
      borderWidth: 1
    },
    {
      label: 'writeMapTimeMan1',
      data: chartData.ch1.writeMapTimeMan1,
      borderWidth: 1
    },
    {
      label: 'writeObjTimeMan1',
      data: chartData.ch1.writeObjTimeMan1,
      borderWidth: 1
    },
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});*/

console.log(chartData.discret)

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: chartData.axis_x,
    datasets: [
      {
      label: 'diffReadMan1',
      data: chartData.discret.diffReadMan1,
      borderWidth: 1
    },
    {
      label: 'diffWriteMan1',
      data: chartData.discret.diffWriteMan1,
      borderWidth: 1
    },
    {
      label: 'readMapTimeMan1',
      data: chartData.discret.readMapTimeMan1,
      borderWidth: 1
    },
    {
      label: 'readObjTimeMan1',
      data: chartData.discret.readObjTimeMan1,
      borderWidth: 1
    },

    {
      label: 'writeMapTimeMan1',
      data: chartData.discret.writeMapTimeMan1,
      borderWidth: 1
    },
    {
      label: 'writeObjTimeMan1',
      data: chartData.discret.writeObjTimeMan1,
      borderWidth: 1
    },
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});