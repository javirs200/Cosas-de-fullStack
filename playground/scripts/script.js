console.log("iniciando script");


function name(p1, p2) {
    console.log("has llamado a la funcion name")
    console.log("con parametros:")

    console.log("p1 ->", p1);

    console.log("p2 ->", p2);

}

window.onload = () => {
    boton = document.getElementById("accion")

    if (boton != null) {

        boton.onclick = () => {

            console.log("has pulsado");
            let key = prompt("pon un color:","azul")

            switch (key) {
                case "rojo":
                    console.log("c1");
                    break;

                default:
                    console.log("cDefault");
                    break;
            }
        }
    }
}


name("hola", "que tal")




