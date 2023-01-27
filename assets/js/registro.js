let usuarios = [
    {
        nombre: "Nicolas",
        password: "123456",
        correo: "Nicolas@gmail.com",
    },
    {
        nombre: "Ignacio",
        password: "123456",
        correo: "Ignacio@gmail.com",

    }
]






document.getElementById("form-login").addEventListener("submit", function (event) {

    event.preventDefault();

    let nombre = document.getElementById("login-nombre").value;
    let password = document.getElementById("login-password").value;
    let correo = document.getElementById("login-correo").value;

    let datos = { nombre, password, correo };

    usuarios.push(datos);

    alert("Usuario Registrado");
    location.href = "./usuarios.html";





})

