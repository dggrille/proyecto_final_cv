
document.getElementById("boton_gracias").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("agradecimiento").innerHTML = "GRACIAS AL DOCENTE DANIEL RINALDI POR COMPARTIR TUS CONOCIMIENTOS (Probando eventos)";
}

document.getElementById("boton_musica").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("musica").innerHTML = "ME AYUDA A TENER MAS ENERGIA Y UN MEJOR ANIMO PARA SENTIRME MEJOR (Probando eventos)";
}


document.getElementById("boton_gustar").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("gustar").innerHTML = "ESPERO QUE TE HALLA GUSTADO EL PROYECTO, LE DEDIQUE TIEMPO, PACIENCIA Y ENTUSIASMO (Probando eventos)";
}

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#7BE511";
});

document.getElementById("boton_color2").addEventListener("click", function() {
    document.body.style.backgroundColor = "#E6C18C";
});

document.getElementById("boton_ocultar").addEventListener("click", function() {
    document.getElementById("parrafo_objetivo").style.display = "none";
});


/* No logre que funcione el siguiente codigo, ¿Por que será? Error en .addEventListener("click", function() {    */
document.getElementById("boton_alias").addEventListener("click", function() {    
    console.log("Hola mundo desde addEventListener");
    document.getElementById("alias").innerHTML = "¡ME PUEDEN DECIR DIEGOTE (Probando eventos)";
});

/* No logre que funcione el siguiente codigo, ¿Por que será?*/
document.getElementById("objetivo").innerHTML = "¡TRATAREMOS DE LOGRAR COMO OBJETIVO! (Probando eventos) ";

/* No logre que funcione el siguiente codigo para restablecer color de fondo, ¿Por que será? En documento aparte unicos SI ME FUNCIONA*/
document.getElementById("boton_default").addEventListener("click", function() {
    document.body.style.backgroundColor = "#90ee90";
});








