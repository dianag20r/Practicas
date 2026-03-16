let signosChinos = [
  "Mono",
  "Gallo",
  "Perro",
  "Cerdo",
  "Rata",
  "Buey",
  "Tigre",
  "Conejo",
  "Dragón",
  "Serpiente",
  "Caballo",
  "Cabra",
];
let calculaSigno = function () {
  let anio = parseInt(prompt("Escribe tu año de nacimiento: "));
  let signo = signosChinos[anio % 12];
  console.log(`Tu año chino es ${signo}`);
};

let adivinaNum = function () {
  let num = Math.floor(Math.random() * 99 + 1);
  for (let i = 1; i < 11; i++) {
    let respuesta = parseInt(prompt("Adivina un numero (1-100): "));
    let n = 10 - i;
    if (num > respuesta) {
      console.log(`El numero a adivinar es mayor, te quedan ${n} intentos`);
    } else if (num < respuesta) {
      console.log(`El numero a adivinar es menor, te quedan ${n} intentos`);
    } else if (num == respuesta) {
      alert(`Felicidades acertaste!!, te tomo ${i} intentos`);
      break;
    } else {
      alert(`Error, ingresa nuevamente, te quedan ${n} intentos`);
    }
  }
};
