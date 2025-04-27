let mensaje = document.getElementById("message");
let home = document.getElementById("pagina_principal");

let boton = document.getElementById("subscribe");
let form = document.getElementById("email_form");
let error = document.getElementById("error");
let input = document.getElementById("email_user")

let btn_back = document.getElementById("volver");


boton.addEventListener("click", function(event) {

    let email = document.getElementById("email_user").value;
    let span = document.getElementById("span");

    if (!email.includes('@')) {
        error.textContent = "Valid email required";
        // Añadimos esta clase para dar los estilos de error al input
        input.classList.add("error");
        return;
    }

    input.classList.remove("error");

    span.textContent = email + ".";
    error.textContent = "";

    home.style.display = "none";
    mensaje.style.display = "flex";

})


btn_back.addEventListener("click", function(event) {
    mensaje.style.display = "none";
    home.style.display = "block";
})
