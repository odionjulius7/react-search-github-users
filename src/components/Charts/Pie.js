// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

// the destructured {data} is the data passed to the <Pie />
const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie2d", // The chart type, i.e. the type chart we want to display
    width: "100%", // Width of the chart and can be changed
    height: "350", // Height of the chart
    dataFormat: "json", // Data type always json
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages", // name/ title of the chart
        captionFontColor: "#102a42",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 16,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        // paletteColor is for giving each item different colors but know the numbers of value so to give the exact no: of colors to avoid color repeat
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: "#FFFFFF",
        showBorder: 0,
        decimals: 0, // 12.34% (just like using toFix()) if you don't want decimal numbers
        pieRadius: "45%", // for reducing/increasing the pie size(i.e. the rounded circle)
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
