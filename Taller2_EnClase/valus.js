var boton =  document.getElementById("boton1");
boton.style.display = "none";



function valpass(){
    let pass = document.getElementById("pass").value;
    let passv = document.getElementById("passv").value;
    if (pass === passv){
        //alert("Contraseña Correcta")
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = '<label></label>';
        
    }
    else{
        //alert("Contraseña Incorrecta")
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = '<link rel="stylesheet" href="stylecopy.css">';
    }
}