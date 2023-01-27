
let plataformas = document.getElementById("plataformas")
let contadorCarrito = document.getElementById("contador-carrito")
let contador = 0


plataformas.addEventListener("click", function (event) {
    contador++; contadorCarrito.innerText = contador; alert("Su producto se ha agregado exitosamente al carrito")



})
