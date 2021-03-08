const nData = 2000; // how many items in data set

// maximum values for items in data set

const xMax = 1000;
const yMax = 1000;
const zMax = 1000;

// If we want to change the dataItem value to be "colorized", change both
//   x => (valueToColor = "xValue") && (maxValueToColor = xMax)
//   y => (valueToColor = "yValue") && (maxValueToColor = yMax)
//   z => (valueToColor = "zValue") && (maxValueToColor = zMax)

const valueToColor = "zValue";
const maxValueToColor = zMax;

const nShades = 2000; // how many colors there are in colormap (minumum 9 for most maps)

const isRandomColormap = false; // false results in "jet" colormap

const setup = {
  nData,
  xMax,
  yMax,
  zMax,
  valueToColor,
  maxValueToColor,
  nShades,
  isRandomColormap,
};

module.exports = { setup };
