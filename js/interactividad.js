
document.getElementById("boton_gracias").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("agradecimiento").innerHTML = "GRACIAS AL DOCENTE DANIEL RINALDI POR COMPARTIR TUS CONOCIMIENTOS";
}

document.getElementById("boton_musica").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("musica").innerHTML = "ME AYUDA A TENER MAS ENERGIA Y UN MEJOR ANIMO PARA SENTIRME MEJOR";
}


document.getElementById("boton").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("gustar").innerHTML = "ESPERO QUE TE HALLA GUSTADO EL PROYECTO, LE DEDIQUE TIEMPO, PACIENCIA Y ENTUSIASMO";
}

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#7BE511";
});




