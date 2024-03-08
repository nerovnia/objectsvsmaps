const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");

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
    for (let i = 0; i < chartSteps; i++) {
      x.push(i.toString(10));
    }
    return x;
  }

  #dataApproximation(data, chartSteps) {
    console.log(data);
    let surrStep = 0;
    const oneStep = Math.floor(data.length / chartSteps);
    for (let i = 0; i < chartSteps; i++) {
      const tObj = {
        man1: {},
        man2: {},
      };
      for (const key of Object.keys(data[0].man1)) {
        tObj.man1[key] = 0;
        tObj.man2[key] = 0;
      }
      console.log("------------------");
      console.log(tObj);
      console.log("------------------");

      for (let j = 0; j < oneStep || i * chartSteps + j < data.length; j++) {
        for (const key of Object.keys(data[0].man1)) {
          tObj.man1[key] += data[i * chartSteps + j].man1[key];
          tObj.man2[key] += data[i * chartSteps + j].man1[key];
        }
        for (const key of Object.keys(data[0].man1)) {
          this.discret[`${key}Man1`].push(tObj.man1[key] / chartSteps);
          this.discret[`${key}Man2`].push(tObj.man2[key] / chartSteps);
        }
      }
    }
  }
}
const chartSteps = 40;
const chartData = new ChartData(measurements, chartSteps);
console.log(chartData);
console.log(chartData.discret);

new Chart(ctx2, {
  type: "line",
  data: {
    labels: chartData.axis_x,
    datasets: [
      {
        label: "diffReadMan1",
        data: chartData.discret.diffReadMan1,
        borderWidth: 1,
      },
      {
        label: "diffWriteMan1",
        data: chartData.discret.diffWriteMan1,
        borderWidth: 1,
      },
      {
        label: "readMapTimeMan1",
        data: chartData.discret.readMapTimeMan1,
        borderWidth: 1,
      },
      {
        label: "readObjTimeMan1",
        data: chartData.discret.readObjTimeMan1,
        borderWidth: 1,
      },

      {
        label: "writeMapTimeMan1",
        data: chartData.discret.writeMapTimeMan1,
        borderWidth: 1,
      },
      {
        label: "writeObjTimeMan1",
        data: chartData.discret.writeObjTimeMan1,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
