var checkbox=document.getElementById("inlineCheckbox1");
var checkboxLb=document.getElementById("inlineCheckboxLab1")
checkbox.style.display="none";
checkboxLb.style.display="none";

function habilitar(){
    let radio = document.getElementById("flexRadioDefault3").value;
    let radio1 = document.getElementById("flexRadioDefault2").value;
    let radio2 = document.getElementById("flexRadioDefault1").value;

    if(radio === 1){
        checkbox.style.display="block";
        checkboxLb.style.display="block";

    } 
    else {
        checkbox.style.display="none";
        checkboxLb.style.display="none";

    }    
    
}
