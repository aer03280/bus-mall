'use strict';

function drawChart() {
  var holder = document.getElementById('styleChart');
  holder.setAttribute('id' , 'styleChartTwo');
  var Data = document.getElementById('appear');
  Data.setAttribute('id' , 'button');
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
          backgroundColor: 'rgba(128 , 128 , 0, 9)',
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
