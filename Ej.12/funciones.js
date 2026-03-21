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
  let anio = parseInt(prompt("Ingresa tu año de nacimiento: "));
  if (isNaN(anio)) {
    console.log("Por favor ingresa un año válido");
    return;
  }
  let signo = signosChinos[anio % 12];
  console.log(`Tu año chino es ${signo}`);
};

let adivinaNum = function () {
  let num = Math.floor(Math.random() * 100 + 1);
  let mensaje = "Adivina un numero (1-100): ";
  for (let i = 1; i < 11; i++) {
    let respuesta = parseInt(prompt(mensaje));
    let n = 10 - i;
    if (isNaN(respuesta)) {
      mensaje = `Ingresa un numero válido, te quedan ${n} intentos`;
    } else if (num > respuesta) {
      mensaje = `El número a adivinar es mayor, te quedan ${n} intentos`;
    } else if (num < respuesta) {
      mensaje = `El número a adivinar es menor, te quedan ${n} intentos`;
    } else {
      alert(`Felicidades acertaste!!, te tomo ${i} intentos`);
      return;
    }
  }
  alert(`Perdiste. El número era ${num}`);
};
