window.onload = () => {

	let miform = document.getElementById("miform")

	miform.addEventListener("submit", (event) => {

		//strings

		let enviado = "Has enviado formulario!!!"

		let nameLengthWarn = "error en la longitud del nombre"

		event.preventDefault(); // parar envío formulario

		console.log(enviado);

		//console.log(event); // objeto con datos
		//console.log(event.target.elements); // inputs del form

		let data = event.target

		let fname = data.name.value

		console.log("nombre", fname);

		if (fname.length < 3 || fname.length > 5) {
			console.log(nameLengthWarn)
			//alert(nameLengthWarn)
		}

	}
	)

}