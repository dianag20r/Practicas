/*
function crearDado(num){
    return function(){
        return Math.floor(Math.random()*num)+ 1;
    };
}
let dado6 = crearDado(6);
let dado20 = crearDado(20);
let dado100 = crearDado(100);
let dadoRand = crearDado(dado100());

console.log(`HOLA`);
const ror2Game = {
  title: "Risk of the rain 2",
  developer: "Hopoo Games",
  score: 100,
};

function Game(title, developer, score) {
  this.title = title;
  this.developer = developer;
  thi.score = score;
}

const game1 = new Game("Flat heroes", "Pararelle Circules", 8);
const game2 = new Game("Move or die", "Those awesome Guys", 6);

function player(name, age) {
  this.name = name;
  this.age = age;
}

const rand = new player("Randy Fernandez", 33);
const ken = new player("Ken Rivera", 39);

function Game(title, developer, score, owner) {
  this.title = title;
  this.developer = developer;
  this.score = score;
  this.owner = owner;
}
game1.owner = rand;
game2.owner = ken;


const Ingeniero = {
  carrera: "civil",
  carreraEstudiada() {
    console.log(`estudió la carrera de ${this.carrera}`);
  },
  crearIngeniero(carrera) {
    this.carrera = carrera;
  },
};
const ingeniero1 = Object.create(Ingeniero);
ingeniero1;
crearIngeniero("Computacion");
const electricista1 = Object.create(Ingeniero);
electricista1.carrera = "eléctrico";


function hacerIngeniero(carrera) {
  let nuevoingeniero = Object.create(Ingeniero);
  nuevoingeniero.carrera = carrera;
  return nuevoingeniero;
}
const compu1 = new hacerIngeniero("computación");
*/

class IngenieroClass {
  carrera = "civil";
  constructor(carrera) {
    if (carrera != null) {
      this.carrera = carrera; //Para no tener q declarar otra variable el: carrera = carreraNueva;
    }
    likes = 0;
  }
  carreraEstudiada() {
    console.log(`estudió la carrera de ${this.carrera}`);
  }
}

let meca = new IngenieroClass("mecatrónica");

let vidasTotales = 10;
const p1 = {
  name: "Manu",
  vidasTotales: 3,
  die() {
    this.vidasTotales--;
    if (this.vidasTotales > 0) {
      return `P1 died, remaining lifes:${this.vidasTotales}`;
    } else {
      vidasTotales--;
      this.vidasTotales = 3;
      return `P1 no lifes remaining, continues:${vidasTotales}`;
    }
  },
};

function dadoSimple(num) {
  try {
    if (Number.isInteger(num) == true) {
      return Math.floor(Math.random() * num) + 1;
    } else {
      throw new Error();
    }
  } catch (e) {
    //e == error //er parametro que guarda el mesaje de error
    console.log(
      "Necesitas ingresar un número entero, igual lanzaré un dado de 6",
    );
    return Math.floor(Math.random() * 6) + 1;
  }
}
