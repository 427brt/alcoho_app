<template>
  <div class="card">
    <div class="pb-0 card-header mb-0">
      <h6>{{ title }}</h6>
      <p class="text-sm">
        <i class="fa fa-arrow-up text-success"></i>
        <span class="font-weight-bold">{{detail1}}</span>
        {{detail2}}
      </p>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from "chart.js/auto";
  import createNum from "../../logic/createNum.js"

  export default {
    name: "gradient-line-chart",
    data() {
      return {
        //user:user,
        sdata: {
        id: [
          {
            index: 0,
            date: 1, //
            step: 514, //
            aDayCalorie: (514 / 100 * 3.5).toFixed(3), //  100歩で3.5Kcal
            basalMetabolism: 1530
          },

          {
            index: 1,
            date: 2,
            step: 14913,
            aDayCalorie: (14913 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 2,
            date: 3,
            step: 9786,
            aDayCalorie: (9786 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 3,
            date: 4,
            step: 3631,
            aDayCalorie: (3631 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 4,
            date: 5,
            step: 2393,
            aDayCalorie: (2393 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 5,
            date: 6,
            step: 6260,
            aDayCalorie: (6260 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 6,
            date: 7,
            step: 5933,
            aDayCalorie: (5933 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 7,
            date: 8,
            step: 6974,
            aDayCalorie: (6974 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 8,
            date: 9,
            step: 8460,
            aDayCalorie: (8460 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 9,
            date: 10,
            step: 6539,
            aDayCalorie: (6539 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 10,
            date: 11,
            step: 7187,
            aDayCalorie: (7187 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 11,
            date: 12,
            step: 11763,
            aDayCalorie: (11763 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 12,
            date: 13,
            step: 14322,
            aDayCalorie: (14322 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 13,
            date: 14,
            step: 881,
            aDayCalorie: (881 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 14,
            date: 15,
            step: 6517,
            aDayCalorie: (6571 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 15,
            date: 16,
            step: 1946,
            aDayCalorie: (1946 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 16,
            date: 17,
            step: 8185,
            aDayCalorie: (8185 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 17,
            date: 18,
            step: 13227,
            aDayCalorie: (13227 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 18,
            date: 19,
            step: 411,
            aDayCalorie: (411 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 19,
            date: 20,
            step: 9185,
            aDayCalorie: (9185 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 20,
            date: 21,
            step: 3340,
            aDayCalorie: (3340 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 21,
            date: 22,
            step: 1201,
            aDayCalorie: (1201 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 22,
            date: 23,
            step: 9604,
            aDayCalorie: (9604 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 23,
            date: 24,
            step: 8552,
            aDayCalorie: (8552 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 24,
            date: 25,
            step: 307,
            aDayCalorie: (307 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 25,
            date: 26,
            step: 8455,
            aDayCalorie: (8455 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 26,
            date: 27,
            step: 9560,
            aDayCalorie: (9560 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 27,
            date: 28,
            step: 9376,
            aDayCalorie: (9376 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 28,
            date: 29,
            step: 3111,
            aDayCalorie: (3111 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          },

          {
            index: 29,
            date: 30,
            step: 8700,
            aDayCalorie: (8700 / 100 * 3.5).toFixed(3),
            basalMetabolism: 1530
          }
        ]

      },
      };
    },
    props: {
      title: {
        type: String,
        default: "先週１週間の歩数",
      },
      detail1: {
        type: String,
        default: '4% more',
      },
      detail2: {
        type: String,
        default: "前日と比べて",
      },
    },

    mounted() {
      var ctx1 = document.getElementById("chart-line").getContext("2d");
      const sdata = this.sdata;
      //var status = sdata.id[num[7]] / sdata.id[num[6]] * 100;
      var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);
      const num = createNum
      //export { num };
      gradientStroke1.addColorStop(1, "rgba(94, 114, 228, 0.2)");
      gradientStroke1.addColorStop(0.2, "rgba(94, 114, 228, 0.0)");
      gradientStroke1.addColorStop(0, "rgba(94, 114, 228, 0)");
      new Chart(ctx1, {
        type: "line",
        data: {
          labels: ["日", "月", "火", "水", "木", "金", "土"],
          datasets: [
            {
              label: "歩数 ",
              tension: 0.4,
              borderWidth: 0,
              pointRadius: 2,
              borderColor: "#4BB543 ",
              backgroundColor: gradientStroke1,
              // eslint-disable-next-line no-dupe-keys
              borderWidth: 3,
              fill: true,
              data: [sdata.id[num[1]].step, sdata.id[num[2]].step, sdata.id[num[3]].step, sdata.id[num[4]].step, sdata.id[num[5]].step, sdata.id[num[6]].step, sdata.id[num[7]].step],
              //data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 40, 300, 220, 500, 250, 400, 230, 500],
              maxBarThickness: 6,
          },
        ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                padding: 10,
                color: "#fbfbfb",
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5],
              },
              ticks: {
                display: true,
                color: "#ccc",
                padding: 20,
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
          },
        },
      });
    },
  };
</script>
