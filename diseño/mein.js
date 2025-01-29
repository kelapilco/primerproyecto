
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let valid = true;

    
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const mensajeError = document.getElementById("mensajeError");
    const successMessage = document.getElementById("successMessage");


    nombreError.classList.add("d-none");
    emailError.classList.add("d-none");
    mensajeError.classList.add("d-none");

    if (nombre.value.trim() === "") {
        nombreError.classList.remove("d-none");
        valid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.classList.remove("d-none");
        valid = false;
    }

    if (mensaje.value.trim() === "") {
        mensajeError.classList.remove("d-none");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    } else {
        event.preventDefault(); 
        successMessage.classList.remove("d-none"); 

       
        nombre.value = "";
        email.value = "";
        mensaje.value = "";

        setTimeout(() => {
            successMessage.classList.add("d-none");
        }, 5000); 
    }
});
document.addEventListener("DOMContentLoaded", function () {
    function actualizarFecha() {
        const fechaElemento = document.getElementById("fecha");
        const fechaActual = new Date();
        const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        fechaElemento.textContent = fechaActual.toLocaleDateString("es-ES", opciones);
    }

    actualizarFecha(); 
});
