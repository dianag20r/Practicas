function addImgs() {
  let divPerros = document.getElementById("idPerros");
  let divGatos = document.getElementById("idGatos");

  let imgPerro = document.createElement("img");
  imgPerro.src =
    "https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png";

  let imgGato = document.createElement("img");
  imgGato.src =
    "https://i.pinimg.com/originals/34/c9/89/34c9896ced8b29489e89b0dfa8f930d8.jpg";

  divPerros.appendChild(imgPerro);
  divGatos.appendChild(imgGato);
}

function toggleClass() {
  let imagenes = document.querySelectorAll("img");
  for (let img of imagenes) {
    img.classList.toggle("roundImg");
  }
}
