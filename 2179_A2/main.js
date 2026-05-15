var vg1 = "js/S1Scatter.vg.json";

vegaEmbed("#chart1", vg1).then(function(result) {
}).catch(console.error);

var vg2 = "js/S1Heatmap.vg.json";
vegaEmbed("#chart2", vg2);