var boton =  document.getElementById("boton1");
boton.style.display = "none";


function valpass(){
    let pass = document.getElementById("pass").value;
    let passv = document.getElementById("passv").value;
    if (pass === passv){
        alert("Contraseña Correcta")
    }
    else{
        alert("Contraseña Incorrecta")
    }
}