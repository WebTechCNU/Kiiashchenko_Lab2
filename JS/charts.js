// * CHARTS

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let array = [];
  cart = JSON.parse(localStorage.getItem("cart"));

  array.push(["Назва", "Ціна"]);
  for (let i = 0; i < cart.length; i++) {
    array.push([cart[i].alt, cart[i].amount * cart[i].price]);
  }

  console.log(array);

  let data = google.visualization.arrayToDataTable(array);
  let options = {
    title: "Ваші покупки",
    fontName: "JetBrains Mono",
    width: 700,
    legend: { textStyle: { fontSize: 16 } },
    titleTextStyle: { fontSize: 20 },
  };
  // * OR PieChart
  let chart = new google.visualization.BarChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
}
