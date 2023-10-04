//playground for local js

function local() {
    
}

window.onload = () => {
    let boton = document.getElementById("accion");

    if (boton != null) {

        boton.onclick = () => {
            local()
        }
    }
}

