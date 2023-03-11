const options = {
  series: [
    {
      name: "cambio",
      data: [
        {
          x: new Date("2018-02-12").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-13").getTime(),
          y: 5.3,
        },
        {
          x: new Date("2018-02-14").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-15").getTime(),
          y: 5.11,
        },
        {
          x: new Date("2018-02-16").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-17").getTime(),
          y: 5.25,
        },
        {
          x: new Date("2018-02-18").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-19").getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    min: 5,
    tickAmount: 4,  /* Quantas linhas são após a base */
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',')
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ["#7C3AED"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
    <span>${new Date(
      w.globals.seriesX[seriesIndex][dataPointIndex]
    ).toLocaleDateString("pt-BR", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })}</span>
    </div>`
    },
  },
}

/* 
  Explicando as options:
  Series = são os dados
  Chart = Configurações do tipo do grafico, tamanho, etc
  dataLabels = True aparece em cada pico do grafico, o numero referente à ele; False não aparece
  Stroke = Tipo da linha
  Yaxis = Dados na lateral do grafico
  Xaxis = Dados em baixo do grafico
  Fill = Como está o preenchimento da cor
  Colors = É a cor
  Tooltip = Quando passa o mouse por cima, mostra como vai ser apresentado o dado
*/

/* Ultimas linhas basicamente para criar, onde aplicar e renderizar o chart */

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
