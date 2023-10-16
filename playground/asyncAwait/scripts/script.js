//playground for local js


async function showAvatar() {
  try {
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/javirs200`);
    let githubUser = await githubResponse.json();

    console.log("post await 2");

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;

  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}


window.onload = () => {
  let boton = document.getElementById("accion");

  if (boton != null) {

    boton.onclick = () => {
      showAvatar();
    }
  }
}

