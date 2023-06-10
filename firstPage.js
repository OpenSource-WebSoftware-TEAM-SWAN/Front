

$(document).ready(function () {
  /* chart 초기 설정 */
  var ctx = $("#myChart");
  var chart;

  function createChart() {
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Europe travel",
          "Sky diving",
          "Military",
          "body fat 10%",
          "TOEIC: 950",
          "LOL rank master"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [
              50,
              100,
              100,
              58,
              75,
              32,
            ], // 데이터별 퍼센티지
            borderWidth: 1,
            backgroundColor: [
              "rgba(0, 12, 62, 0.75)",
              "rgba(0, 12, 62, 0.75)",
              "rgba(0, 12, 62, 0.75)",
              "rgba(0, 12, 62, 0.75)",
              "rgba(0, 12, 62, 0.75)",
              "rgba(0, 12, 62, 0.75)",
            ],
            borderColor: [
              "rgba(0, 12, 62, 1)",
              "rgba(0, 12, 62, 1)",
              "rgba(0, 12, 62, 1)",
              "rgba(0, 12, 62, 1)",
              "rgba(0, 12, 62, 1)",
              "rgba(0, 12, 62, 1)",
            ],
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          y: {
            beginAtZero: true,
          },
          x:{
            max: 100,
            grid:{
              display: false
            }
          }
        },
        plugins: {
          datalabels: {
            display: false // label 숨기기
          }
        }
      },
      // 플러그인
      
    });
  }

  // Masonry 초기화
  var $grid = $("#images-container").masonry({
    itemSelector: ".col",
    percentPosition: true,
    // 필요한 Masonry 옵션들을 설정해주세요
  });

  function resizeChart() {
    var chartContainer = $("#row-chart");
    var containerWidth = chartContainer.width();
    ctx.attr("width", containerWidth);
    ctx.attr("height", containerWidth);

    if (chart) {
      chart.resize();
    }
  }

  createChart();
  resizeChart();

  $(window).resize(function () {
    resizeChart();
  });

  function testOrganize(){
    // 새로운 데이터 값으로 업데이트할 배열 생성
    var newValues = [75, 80, 65, 90, 70, 85];

    // 차트 데이터의 첫 번째 데이터셋에 새로운 값을 할당
    chart.data.datasets[0].data = newValues;

    // 차트 업데이트
    chart.update();
  }
  testOrganize();
});
