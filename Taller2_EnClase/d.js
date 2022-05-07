var checkbox=document.getElementById("inlineCheckbox1");
var checkboxLb=document.getElementById("inlineCheckboxLab1")
checkbox.style.display="none";
checkboxLb.style.display="none";
var checkbox1=document.getElementById("inlineCheckbox2");
var checkboxLb1=document.getElementById("inlineCheckboxLab2")
checkbox1.style.display="none";
checkboxLb1.style.display="none";


function habilitar(){
    let radio = document.getElementById("flexRadioDefault3").value;
    let radio1 = document.getElementById("flexRadioDefault2").value;
    let radio2 = document.getElementById("flexRadioDefault1").value;

    if(radio === '1'){
        checkbox.style.display="block";
        checkboxLb.style.display="block";
        checkbox1.style.display="block";
        checkboxLb1.style.display="block";

    }
}
function deshabilitar(){
    let radio1   = document.getElementById("flexRadioDefault2").value;
    let radio2 = document.getElementById("flexRadioDefault1").value;

    if(radio1 === '1' || radio2 === '1'){
        checkbox.style.display="none";
        checkboxLb.style.display="none";
        checkbox1.style.display="none";
        checkboxLb1.style.display="none";
    }
}
