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
          backgroundColor: 'rgba(49 , 129 , 116 , 1)',
          borderWidth: 1,
          data: dataToChart,
        }
      ]
    },
  });
  responsive: false;
}
