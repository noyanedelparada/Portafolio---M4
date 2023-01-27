let usuarios = [
    {
        nombre: "Nicolas",
        password: "123456",
        correo: "Nicolas@gmail.com",
    },
    {
        nombre: "Ignacio",
        password: "123456",
        correo:"Ignacio@gmail.com",

    }
]


document.getElementById("form-login").addEventListener("submit", function (event) {

    event.preventDefault();

    let nombre = document.getElementById("login-nombre").value;
    let password = document.getElementById("login-password").value;

    

    let usuarioEncontrado = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)



    if (usuarioEncontrado) {
        alert("Usuario validado");
        location.href = "./index.html"


    }

    else {
        Swal.fire({
            icon: 'error',
            title: 'Datos incorrectos',


        })
    }


})