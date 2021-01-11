function alert1 () {
    alert ("La solicutud ha sido aceptada");
    }
function alert2 () {
    var mensaje = confirm("¿Estas seguro de rechazar la solicitud?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    alert("Solicitud Rechazada");
    }
    //Detectamos si el usuario denegó el mensaje
    else {
    alert("Operacion Cancelada");
    }
 }

