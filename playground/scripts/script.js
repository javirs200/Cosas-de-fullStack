console.log("iniciando script");

window.onload = () => {
    boton = document.getElementById("accion")

    if (boton != null) {

        boton.onclick = () => {

            console.log("has pulsado");

            localStorage.setItem("myCat", "Tom");

            console.log("save to lacl Storage");

            let local = localStorage.getItem("myCat");

            console.log("load from local Storage", local)

        }
    }

    var fileContent = "My epic novel that I don't want to lose.";
    var bb = new Blob([fileContent], { type: 'text/plain' });
    var a = document.createElement('a');
    a.download = 'download.txt';
    a.href = window.URL.createObjectURL(bb);
    a.click();
}




