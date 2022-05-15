function Mycolor() {
  genero=sex;
  if(genero == "MASCULINO"){
    genero=" ";
    return("red");

  }
  else{
    genero=" ";
    return("blue");
  }
}

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
    y: num,
    x: ciudd,
    text: sex,
    mode: 'markers',
    marker: {
      color: Mycolor(sex),
      size: 20
    }

};
var datosGraficas= [graf1];

var layout={
    title: 'NACIDOS',
    showlegend: false,
    height: 600,
    width: 600

};
Plotly.newPlot("myDiv",datosGraficas,layout);
});

  