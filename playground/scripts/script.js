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

  /*var fileContent = "My epic novel that I don't want to lose.";
  var bb = new Blob([fileContent], { type: 'text/plain' });
  var a = document.createElement('a');
  a.download = 'download.txt';
  a.href = window.URL.createObjectURL(bb);
  a.click();*/
}




