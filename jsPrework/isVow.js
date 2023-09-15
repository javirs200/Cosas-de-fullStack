vocales = ['a','e','i','o','u']

function eachAux(item, index, arr) {
    var aux = String.fromCharCode(item)
    arr[index] = vocales.includes(aux) ? aux : item 
  }

function isVow(arr) {
    arr.forEach(eachAux)
    console.log(arr);
}

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])

//[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]