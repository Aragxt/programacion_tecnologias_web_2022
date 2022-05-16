var num = [];
var sex = [];
var ciudd = [];

fetch('https://www.datos.gov.co/resource/kzk3-8dnx.json')

.then(datos_obetenidos => datos_obetenidos.json())

.then(function transformar(datos_obetenidos){

datos_obetenidos.forEach(function agregar (datos_obetenidos)
{
    if(datos_obetenidos.sexo != undefined && datos_obetenidos.ciudad != undefined && datos_obetenidos.n_mero != undefined)
    {
        num.push(datos_obetenidos.n_mero);
        sex.push(datos_obetenidos.sexo);
        ciudd.push(datos_obetenidos.ciudad);
    }

});
var graf1={
    type: 'scatter',
    mode: 'markers',

    x: ciudd,
    y: num,
    text: sex,

    marker: {
      size: 17,
      opacity: 0.8,
    },
    transforms: [
      {
        type: 'groupby',
        groups: sex,
        styles: [
          {target: "MASCULINO", value: {marker: {color: 'yellow'}}},
          {target: "FEMENINO", value: {marker: {color: 'silver'}}},
          {target: "OTRO", value: {marker: {color: 'red'}}},
      ]
     }]

};

var datosGraficas= [graf1];

var layout={
    title: 'NACIDOS ENTRE 2012 Y 2017 EN CIUDADES PRINCIPALES',
    showlegend: false,
    height: 600,
    width: 600

};
Plotly.newPlot("myDiv",datosGraficas,layout);
});

  