'use strict';

function drawChart() {
  var dataToChart = [];
  var namesToChart = [];
  for (var i = 0; i < arrayAllImg.length; i++){
    dataToChart.push(arrayAllImg[i].clicks);
    namesToChart.push(arrayAllImg[i].imgName);
  }

  var myChart = new Chart (ctx);
  new Chart (ctx, {
    type: 'bar',
    data: {
      labels: namesToChart,
      datasets: [
        {
          label: '# Clicks Per Item',
          backgroundColor: 'rgba(255 , 95 , 132 , 0.2)',
          // borderColor: [0 , 153 , 153],
          borderWidth: 1,
          data: dataToChart,
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  });
  reponsive: false;

}
