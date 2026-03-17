function cambiarColor() {
    // Obtenemos el elemento por su ID
    var boton = document.getElementById("boton-enviar");

    // Verificamos si el color actual NO es rojo para cambiarlo
    if (boton.style.backgroundColor !== "green") {
        boton.style.backgroundColor = "green";
    } else {
        // Si ya era rojo, vuelve al color original (naranja d35400)
        boton.style.backgroundColor = "#d35400";
    }
}