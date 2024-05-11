const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["01 Thu", "02 Fri", "03 Sat", "04 Sun", "05 Mon", "06 Tue", "07 Wed", "08 Thu", "09 Fri", "10 Sat", "11 Sun", "12 Mon", "13 Tue", "14 Wed", "15 Thu", "16 Fri", "17 Sat", "18 Sun", ], // Days of the week
      datasets: [
        {
          label: "Attendance",
          data: [55, 50, 0, 0, 41, 52, 49, 45, 55, 0, 0,], // Attendance data for each day
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 80, // Set the maximum value for the y-axis
        },
        x: {
          title: {
            display: true,
            text: "February", // X-axis title
          },
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  }); 
});