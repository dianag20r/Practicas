const personContainter = document.querySelectorAll("figure");
let activeElement;

personContainter.forEach((element) => {
  element.addEventListener("mouseenter", changeActive);
  if (element.className == "activeItem") activeElement = element;
});

function changeActive() {
  console.log("changed");
  activeElement.classList.toggle("activeItem");
  this.classList.toggle("activeItem");
  activeElement = this;
}

async function fetchRandomUsers() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=5");
		const data = await response.json();
		const users = data.results;

		personContainter.forEach((figure, index) => {
			const user = users[index];

			const img = figure.children[0]; // <img class="roundImg">
			const figcaption = figure.children[1]; // <figcaption>
			
			const h2 = figcaption.children[0]; // <h2>
			const pLocation = figcaption.children[1]; // Primer <p> (Ubicación)
			const pCell = figcaption.children[2]; // Segundo <p> (Celular)

			// Asignamos los valores de la API a los elementos HTML
			img.src = user.picture.large;
			h2.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
			pLocation.textContent = `${user.location.country}, ${user.location.state}, ${user.location.city}`;
			pCell.textContent = user.cell;
		});
	} catch (error) {
		console.error("Error al obtener los datos de la API:", error);
	}
}
fetchRandomUsers();