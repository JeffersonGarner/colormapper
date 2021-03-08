const { generateChartData } = require("./config");
const {
  assignColorIndexToDataItem,
  assignColorToDataItem,
  generateColormap,
  generateColorReport,
} = require("./utils");

const { setup } = require("./_setup");
const {
  nData,
  xMax,
  yMax,
  zMax,
  valueToColor,
  maxValueToColor,
  nShades,
  isRandomColormap,
} = setup;

const dataLimits = { nData, xMax, yMax, zMax };

const mockData = generateChartData(dataLimits);

const colormap = generateColormap(nShades, isRandomColormap);

const mockDataWithColorIndexes = mockData.map((dataItem) =>
  assignColorIndexToDataItem(dataItem, valueToColor, maxValueToColor, nShades)
);

const colorizedData = mockDataWithColorIndexes.map((dataItem) =>
  assignColorToDataItem(dataItem, colormap)
);

generateColorReport(colorizedData, valueToColor, dataLimits, colormap);
