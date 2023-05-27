$(function () {
  "use strict";
  // Create the chart
  Highcharts.chart("dailyChart", {
    chart: {
      height: 360,
      type: "column",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Historical",
    },
    subtitle: {
      text: "Historic air quality graph for Malaysia",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Air Quality Index (AQI)",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
    },
    series: [
      {
        name: "AQI",
        colorByPoint: true,
        data: [
          {
            name: "Sat, 20 May",
            y: 44,
            drilldown: "Sat, 20 May",
          },
          {
            name: "Sun, 21 May",
            y: 121,
            drilldown: "Sun, 21 May",
          },
          {
            name: "Mon, 22 May",
            y: 55,
            drilldown: "Mon, 22 May",
          },
          {
            name: "Tue, 23 May",
            y: 59,
            drilldown: "Tue, 23 May",
          },
          {
            name: "Wed, 24 May",
            y: 74,
            drilldown: "Wed, 24 May",
          },
          {
            name: "Thu, 25 May",
            y: 69,
            drilldown: "Thu, 25 May",
          },
          {
            name: "Fri, 26 May",
            y: 76,
            drilldown: "Fri, 26 May",
          },
          {
            name: "Sat, 27 May",
            y: 41,
            drilldown: "Sat, 27 May",
          },
        ],
      },
    ],
  });
  // Menambahkan kode berikut
  const series = Highcharts.charts[0].series[0];

  const seriesData = series.options.data;

  seriesData.forEach((dataPoint, index) => {
    const point = series.points[index];

    if (dataPoint.y < 50) {
      point.update({
        className: "success",
      });
    } else if (dataPoint.y < 100) {
      point.update({
        className: "warning",
      });
    } else if (dataPoint.y < 150) {
      point.update({
        className: "danger",
      });
    }
  });
});
