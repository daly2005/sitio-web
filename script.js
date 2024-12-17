function showAlert() {
    var input = document.getElementById("input").value;
    var wish = document.getElementById("wish").value;
    var messege = document.getElementById("messege").value;

    if (input && wish && messege) {
        alert("Sus datos fueron registrados correctamente");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function menu() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido","nuevo-contenido2","nuevo-contenido3","nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-actual");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido2");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-actual");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido3");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-actual");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("contenido-actual");
    nuevoContenido.style.display = "block";
}


function cambiarContenido() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("contenido-actual","nuevo-contenido2","nuevo-contenido3","nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido2");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido3");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido");
    nuevoContenido.style.display = "block";
}


function cambiarContenido2() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("contenido-actual","nuevo-contenido","nuevo-contenido3","nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido2");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido2");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido3");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido2");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido2");
    nuevoContenido.style.display = "block";
}


function cambiarContenido3() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("contenido-actual","nuevo-contenido","nuevo-contenido2","nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido3");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido3");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido2");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido3");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido4");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido3");
    nuevoContenido.style.display = "block";
}


function cambiarContenido4() {
    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("contenido-actual","nuevo-contenido","nuevo-contenido2","nuevo-contenido3");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido4");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido4");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido2");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido4");
    nuevoContenido.style.display = "block";

    // Ocultar todo el contenido actual
    var contenidoActual = document.getElementById("nuevo-contenido3");
    contenidoActual.style.display = "none";

    // Mostrar el nuevo contenido
    var nuevoContenido = document.getElementById("nuevo-contenido4");
    nuevoContenido.style.display = "block";
}


let indiceActual = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    const totalImagenes = imagenes.length;

    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = totalImagenes - 1;
    } else if (indiceActual >= totalImagenes) {
        indiceActual = 0;
    }

    const desplazamiento = -indiceActual * 100;
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${desplazamiento}%)`;
}
