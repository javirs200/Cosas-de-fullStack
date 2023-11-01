//playground for local js

async function local() {
    console.log("local");
    let str = "hola"
    let keyPair = await crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"],
      );
    let encripted = await crypto.subtle.encrypt(
        {
          name: "RSA-OAEP",
        },
        keyPair[0],
        str,
      );
    console.log(encripted);
}


function contarNumerosPares (arr){
  return arr.reduce((contador, numero) => {
    if (numero % 2 === 0) {
      return contador + 1;
    }
    return contador;
  }, 0);
}
 

window.onload = () => {
    let boton = document.getElementById("accion");

    if (boton != null) {

        boton.onclick = () => {
          console.log(contarNumerosPares ([5, 2, 6, 3, 7, 5, 6, 3]),[5, 2, 6, 3, 7, 5, 6, 3]);
        }
    }
}

