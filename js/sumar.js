
/* No se logra visualizar el resultado en la pagina PERO SI EN LA CONSOLA ¿Por que sera? Me notifica que TypeError no capturado: no se pueden leer las propiedades de nulo (leyendo 'estilo')
    en HTMLButtonElement.<anónimo> (sumar.js:12:51) style.display = "block";*/
    document.getElementById("sumar").addEventListener("click", function() {
    let numeroA = document.getElementById("numero1").value;
    console.log("El valor del numero A es: "+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log("El valor del numero B es: "+numeroB);
    let resultado = sumar(parseInt(numeroA),parseInt(numeroB));
    console.log("El resultado de la suma es: "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("contenedorResultado").style.display = "block";

})

function sumar(numero1,numero2) {
    return numero1 + numero2;
}
