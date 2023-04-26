function validarFormulario(evento) {
    evento.preventDefault();

    let nombreapellido = document.getElementById('nombreapellido').value;
    let correoelectronico = document.getElementById('correoelectronico').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombreapellido.length > 50) {
        alert('Nombre y Apellido no puede exceder los 50 caracteres.');
        return;
    }
    
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(correoelectronico)){
        alert("Formato de correo electronco no valido.")
        return;
    }

    if(asunto.length > 50) {
        alert('Asunto no puede exceder los 50 caracteres.');
        return;
    }

    if (mensaje > 300) {
        alert("El mensaje no puede superar los 300 caracteres.");
        return;
    }
    this.submit();
}

function comprovarEnviar (evento){
    let nombreapellido = document.getElementById('nombreapellido').value;
    let correoelectronico = document.getElementById('correoelectronico').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombreapellido.length != 0 && correoelectronico.length != 0 && asunto.length != 0 && mensaje.length != 0) {
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
}

let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', validarFormulario); 
setInterval(comprovarEnviar,500);