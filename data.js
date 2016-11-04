'use strict';

function drawChart() {
  var dataToChart = [];
  var namesToChart = [];
  for (var i = 0; i < arrayAllImg.length; i++){
    dataToChart.push(arrayAllImg[i].clicks);
    // dataToChart.push(arrayAllImg[i].clicks / arrayAllImg[i].shown);
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
          backgroundColor: 'rgba(69 , 139 , 0 , 9)',
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
  responsive: false;

}
