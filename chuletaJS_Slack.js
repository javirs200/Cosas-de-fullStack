// En HTML, ubica el elemento script antes de </body>
// Tipos de datos
let numero = 42; // Número
let texto = "Hola"; // Cadena de texto
let booleano = true; // Valor booleano
let arreglo = [1, 2, 3]; // Arreglo
let objeto = { nombre: "Juan", edad: 30 }; // Objeto
// Operadores aritméticos
let suma = 5 + 3;
let resta = 7 - 2;
let multiplicacion = 4 * 6;
let division = 9 / 3;
let modulo = 10 % 3;
// var, let y const
var variableGlobal = "Global"; //en desuso
let variableLet = "valor"; //modificable
const constante = "valor"; //constante
// Operadores de incremento y decremento
let contador = 0;
++contador; // PREIncremento
--contador; // PREDecremento
contador++; // POSTIncremento
contador--; // POSTDecremento
// Template strings
let nombre = "María";
let mensaje = `Hola, ${nombre}!`;
// typeof
console.log(typeof mensaje); //indica tipo de dato: numero, string...
// Estructuras de control
if (condicion) {
  // Código si la condición es verdadera
} else if (otraCondicion) {
  // Código si la segunda condición es verdadera
} else {
  // Código si ninguna condición es verdadera
}
// Operadores de comparación
let x = 5;
let y = 10;
x === y; // Igualdad estricta
x !== y; // Desigualdad estricta
x > y; // Mayor que
x < y; // Menor que
x >= y; // Mayor o igual que
x <= y; // Menor o igual que
// Operadores lógicos
x && y; // AND lógico
x || y; // OR lógico
!x; // NOT lógico
// Operador ternario
let resultado = condicion ? valorSiVerdadero : valorSiFalso;
// Switch case
switch (valor) {
  case 1:
    // Código si valor es 1
    break;
  case 2:
    // Código si valor es 2
    break;
  default:
    // Código si no coincide con ningún caso
}
// Declarar funciones y llamar funciones
function miFuncion(parametro1, parametro2) {
  // Código de la función
}
miFuncion(valor1, valor2); // Llamar función
// Alcance global vs alcance local
    //Alcance Global:
    //Las variables declaradas fuera de funciones o bloques están disponibles en todo el programa.
    //Pueden ser accedidas y modificadas desde cualquier parte del código.
    //Alcance Local*:
    //Las variables declaradas dentro de una función o bloque solo son visibles y accesibles dentro de ese contexto.
    //No pueden ser accedidas desde fuera de la función o bloque en el que se declaran.
// Array
let miArray = [1, 2, 3];
miArray[0]; // Acceder al primer elemento
miArray.length; // Longitud del array, empieza en 1, 0 si está vacío
// Loop for
for (let i = 0; i < 5; i++) {
  // Código a ejecutar en cada iteración
}
// Loop while
while (condicion) {
  // Código a ejecutar mientras la condición sea verdadera
}
// Loop do while
do {
  // Código a ejecutar al menos una vez y luego mientras la condición sea verdadera
} while (condicion);
// Break para salir de bucles
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
}
// Objetos
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
};
console.log(persona.nombre); // Acceder a una propiedad
persona.saludar(); // Llamar a un método
