// Paso 1: Obtener los botones por medio de ID
let btnA = document.querySelector("#A");
let btnB = document.querySelector("#B");
let btnC = document.querySelector("#C");
let myBts = [btnA, btnB, btnC];

// Paso 2: Agregarles el stock, delay y listener a los botones (distinto delay A4s,B3s,C2s)

let myDelay = 4000;
myBts.forEach((btnX) => {
  btnX.stock = 0;
  btnX.delay = myDelay;
  btnX.addEventListener("click", changeBtn);
  myDelay = myDelay - 1000;
});

//Paso 3: Hacer la promesa y regresar resolve o reject segun un delay aleatorio de 1-5 segundos

const changeButtonColor = (buttonX) => {
  return new Promise((resolve, reject) => {
    buttonX.disabled = true;
    buttonX.style.backgroundColor = "grey";
    buttonX.style.color = "black";

    let delay = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      if (delay <= buttonX.delay) {
        resolve();
      } else {
        reject(`Delay was ${delay} out of ${buttonX.delay}`);
      }
    }, delay);
  });
};

// Paso 4: Hacer la función, que modifique el estilo y valor de los botones según el resultado

async function changeBtn() {
  try {
    await changeButtonColor(this);
    this.disabled = false;
    this.style.backgroundColor = "cyan";
    this.stock = this.stock + 1;

    this.innerText = this.innerText.replace(/[0-9]/g, "") + ` ${this.stock}`;
  } catch (e) {
    console.log("Error: " + e);
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.disabled = false;
  }
}
