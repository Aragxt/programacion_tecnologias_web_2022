function validarEmail(correo) {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,11}$/.test(correo)){
     alert("La dirección de email es valida.");
    } else {
     alert("La dirección de email "+correo+" es invalida.");
    }
  }