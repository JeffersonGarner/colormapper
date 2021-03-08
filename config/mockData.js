const generateChartDataItem = (seed, dataLimits) => {
  const { nData, xMax, yMax, zMax } = dataLimits;
  const date = "Aug 2, 2021";
  const xValue = (xMax / nData) * seed;
  const yValue = (yMax / nData) * seed;
  const zValue = (zMax / nData) * seed * Math.random();

  return {
    date,
    xValue,
    yValue,
    zValue,
  };
};

const generateChartData = (dataLimits) => {
  const chartData = [];

  const { nData } = dataLimits;

  for (let n = 0; n < nData; n++) {
    const newDataItem = generateChartDataItem(n, dataLimits);
    chartData.push(newDataItem);
  }

  return chartData;
};

module.exports = {
  generateChartData,
};
