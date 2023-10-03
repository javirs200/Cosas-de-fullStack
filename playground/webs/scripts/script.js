/***1 -** Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible

**2 -** Hacer que con onmouseover y onmouseout, se muestre/esconda el título de una foto cuando pases el raton sobre dicha foto

**3 -** Añadir dos elementos `<li>` a un `<ul>`, y unirlos al DOM de tu página HTML
	Usar:
	- innerHTML
	- appendChild()
	- createElement()
	- createAttribute()
    	- createTextNode()*/


		
window.onload = () => {

	function mostrarOcultar(){
		//let parrrafo = document.getElementById("textParagraph")
		let parrrafo = document.querySelector("p#textParagraph")
		parrrafo.hidden = !parrrafo.hidden
	}

	let boton = document.getElementById("toggleButton")

	boton.addEventListener("click",mostrarOcultar)

	function spawn(){
		let main = document.querySelector("main")
		let lista = document.createElement("ul")
		let li1 = document.createElement("li")
		let art = document.createAttribute("cosa")
		li1.id = art
		li1.innerHTML="patatas"
		let li2 = document.createElement("li")
		let node = document.createTextNode("nodo")
		lista.appendChild(li1)
		li2.appendChild(node)
		lista.appendChild(li2)
		main.appendChild(lista)

	}

	let boton2 = document.getElementById("crear")

	boton2.addEventListener("click",spawn)

}
