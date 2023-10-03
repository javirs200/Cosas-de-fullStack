console.log("iniciando script");

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen ( forced without ask XD ... ) */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function pausa() {
  for (let i = 5; i > 0; i--) {
    console.log(i);
    await sleep(1000);
  }

}

function surprise() {

  let video = document.getElementById("video");

  let divContent = document.getElementById("content");


  if (video != null && divContent != null) {

    divContent.hidden = true;

    video.loop = true;

    video.hidden = false;

    video.autofocus = true;

    video.play();
  }
}

window.onload = () => {
  let boton = document.getElementById("accion");

  if (boton != null) {

    boton.onclick = () => {

      console.log("has pulsado");
      
      localStorage.setItem("myCat", "Tom");

      console.log("save to lacl Storage");

      let local = localStorage.getItem("myCat");

      console.log("load from local Storage", local);

      console.log("requiesting fullScren");

      //pausa()

      openFullscreen();

      surprise();

    }
  }

  

  function tabla(num) {
    let tmp = [];
    for (let i = 1; i <= 10; i++) {
      tmp.push(`${i}x${num}=${i * num}`)
    }
    return (tmp)
  }

  let n = Number(prompt("introduce un numero para saber su tabla de multiplicar: "))

  console.log(tabla(n));

  // Función para pedir números por teclado y almacenarlos en un array
  function pedirNumeros() {
    let numeros = [];

    while (true) {
      let numero = prompt("Introduce un número (0 para detenerse):");

      // Convierte la entrada del usuario en un número
      let numeroParseado = parseFloat(numero);

      if (isNaN(numeroParseado)) {
        alert("Por favor, introduce un número válido.");
        continue;
      }

      if (numeroParseado === 0) {
        break;
      }

      numeros.push(numeroParseado);
    }

    // Ordena los números de menor a mayor
    numeros.sort(function (a, b) { return a - b });

    return numeros;
  }
  
  let numerosOrdenados = pedirNumeros();

  console.log("Números ordenados: " + numerosOrdenados.join(", "););

}

/*

Dom clase 

//mediante class tag salen reptidos
let teachers = document.getElementsByClassName("fs-slide-content")
for (let i = 0; i < teachers.length; i++) {
    const element = teachers[i];

    let job = element.getElementsByClassName("fs-job")
    let name = element.getElementsByClassName("fs-text")
    console.log(name[0].innerHTML);
    console.log(job[0].innerHTML);
    console.log(" ");
}


//selectores anidados
let profesoresx = document.querySelectorAll("#w-slider-mask-1 .fs-image");
let profesoresy = document.querySelectorAll("#w-slider-mask-1 .fs-text");
let profesoresz = document.querySelectorAll("#w-slider-mask-1 .fs-job");

for (let i = 0; i < profesoresx.length; i++) {
    console.log(profesoresx[i].src);
    console.log(profesoresy[i].innerHTML);
    console.log(profesoresz[i].innerHTML);
}

*/