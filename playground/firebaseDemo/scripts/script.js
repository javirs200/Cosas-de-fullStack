const firebaseConfig = {
    apiKey: "AIzaSyDRVyxoC83LImTqcJ_YC2eajNw1OkUofIs",
    authDomain: "demofb-c2d1b.firebaseapp.com",
    projectId: "demofb-c2d1b",
    storageBucket: "demofb-c2d1b.appspot.com",
    messagingSenderId: "200018554362",
    appId: "1:200018554362:web:87e0c7f24a05351daa8843",
    measurementId: "G-04Q55WC8Z5"
};

firebase.initializeApp(firebaseConfig);// Inicializaar app Firebase

const db = firebase.firestore();// db representa mi BBDD //inicia Firestore

//Create
const createPicture = (picture) => {
    db.collection("album")
        .add(picture)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id)
            readAll();
        })
        .catch((error) => console.error("Error adding document: ", error));
};

//Read all
const readAll = () => {
    db.collection("album")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                printPhoto(doc.data().title, doc.data().url, doc.id)
            });

        })
        .catch(() => console.log('Error reading documents'));
};

//Read one
function readOne(id) {
    db.collection("album")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                printPhoto(doc.data().title, doc.data().url, doc.id);
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
};

//Delete
const deletePicture = () => {
    const id = prompt('Introduce el ID a borrar');
    db.collection('album').doc(id).delete().then(() => {
        alert(`Documento ${id} ha sido borrado`);
        //Clean
        document.getElementById('album').innerHTML = "";
        //Read all again
        readAll();
    })
        .catch(() => console.log('Error borrando documento'));
};

//Clean 
const cleanAlbum = () => {
    document.getElementById('album').innerHTML = "";
  };

//Show on page load
function readOneAlbum(id) {
    db.collection("album")
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

//Create
document.getElementById("create").addEventListener("click", () => {
    const title = prompt("Introduce el título de tu foto");
    const url = prompt("Introduce la url de tu foto");
    if (!title || !url) {
        alert("Hay un campo vacio. No se ha salvado");
        return
    }
    createPicture({
        title,
        url,
    });
});

//Read all
document.getElementById("read-all").addEventListener("click", () => {
    readAll();
});

//Read one
document.getElementById('read-one').addEventListener("click", () => {
    const id = prompt("Introduce el id a buscar");
    readOneAlbum(id);
});

//Delete one
document.getElementById('delete').addEventListener('click', () => {
    deletePicture();
});

//Clean
document.getElementById('clean').addEventListener('click', () => {
    cleanAlbum();
});

//Función auxiliar para pintar una foto en el album
const printPhoto = (title, url, docId) => {
    let picture = document.createElement('img');
    picture.setAttribute('src', url);
    picture.setAttribute('style', 'max-width:250px');
    let caption = document.createElement('p');
    caption.innerHTML = title;
    let id = document.createElement('p');
    id.innerHTML = docId;
    const album = document.getElementById('album');
    album.appendChild(picture);
    album.appendChild(caption);
    album.appendChild(id);
};