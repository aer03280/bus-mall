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
          backgroundColor: 'rgba(255 , 155 , 132)',
          borderColor: 'rgba(64 , 64 , 64)',
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
