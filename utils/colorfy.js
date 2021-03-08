var fs = require("fs");
const colormap = require("colormap");
const { defaultColormap, randomColormap } = require("../config/colormaps");

let report = {};
let selectedColormapForReport;

const generateColormap = (nShades, isRandomColormap = false) => {
  const selectedColormap = isRandomColormap ? randomColormap : defaultColormap;
  selectedColormapForReport = selectedColormap;
  return colormap({
    colormap: selectedColormap,
    nshades: nShades,
    format: "hex",
    alpha: 1,
  });
};

const assignColorIndexToDataItem = (
  dataItem,
  valueToColor,
  maxVal,
  nShades
) => {
  const val = dataItem[valueToColor];
  const colorIndex = Math.round((nShades / maxVal) * Math.round(val));
  return {
    ...dataItem,
    colorIndex,
  };
};

const assignColorToDataItem = (dataItem, colormap) => {
  const color = colormap[dataItem.colorIndex];
  return {
    ...dataItem,
    color,
  };
};

const generateColorReport = (data, valueToColor, dataLimits, colormap) => {
  const dataVitals = data
    .map((dataItem) => {
      const { color, colorIndex } = dataItem;
      return {
        val: dataItem[valueToColor],
        colorIndex,
        color,
      };
    })
    .sort((a, b) => a.val - b.val);

  const minColor = colormap[0];
  const minVal = data[0][valueToColor];
  const maxGeneratedVal = dataVitals[dataVitals.length - 1].val;
  const maxAssignedColor = dataVitals[dataVitals.length - 1].color;
  const maxPossibleColor = colormap[colormap.length - 1];

  report = {
    valueToColor,
    ...report,
    ...dataLimits,
    minVal,
    minColor,
    maxGeneratedVal,
    maxAssignedColor,
    maxPossibleColor,
    colormap: selectedColormapForReport,
  };

  dataVitals.push(report);
  dataVitals.unshift(report);

  itemColorsJSON = JSON.stringify(dataVitals);

  fs.writeFile("itemColors.json", itemColorsJSON, function (err) {
    if (err) {
      return console.error(err);
    }
  });
};

module.exports = {
  assignColorIndexToDataItem,
  assignColorToDataItem,
  generateColormap,
  generateColorReport,
  selectedColormapForReport,
};
