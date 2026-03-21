const numbers = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];

const lessnumbers = [-2, 0, 2];

/*function forof1() {
  for (let num of numbers) {
    console.log(num * 2);
  }
}

function imprimepares(elemento) {
  console.log(elemento * 2);
}
numbers.forEach(imprimepares);

function imprimepares2() {}
numbers.forEach(function (num) {
  console.log(num * 2);
});*/

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },

  {
    title: "Spider-Man",
    score: 90,
    year: 2002,
  },
  {
    title: "coraline",
    score: 100,
    year: 2009,
  },
  {
    title: "Soy leyenda",
    score: 80,
    year: 1999,
  },
  {
    title: "Avatar",
    score: 96,
    year: 2009,
  },
  {
    title: "contra lo imposible",
    score: 100,
    year: 2016,
  },

  {
    title: "El santos vs las momias de Guanajuato",
    score: 95,
    year: 1972,
  },
  {
    title: "Cars ",
    score: 100,
    year: 2006,
  },
  {
    title: "El conjuro",
    score: 99,
    year: 201,
  },
  {
    title: "Madagascar",
    score: 55,
    year: 2005,
  },
  {
    title: "Pacific rim",
    score: 75,
    year: 2013,
  },
  {
    title: "Pulp Fiction",
    score: 92,
    year: 1994,
  },
  {
    title: "Interstellar",
    score: 87,
    year: 2014,
  },
  {
    title: "Revenant",
    score: 88,
    year: 2016,
  },
  {
    title: "DUNE",
    score: 98,
    year: 2021,
  },
];

//function forof2() {
//  for (let movie of movies) {
//    console.log(`${movie.title} - ${movie.score}/100`);
//  }
//}

/*movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}/100`);
}

function foreach2() {
    movies.forEach(function (movie) {
        console.log(`${movie.title} - ${movie.score}/100`);
    });
}

let square1 = function square(num) {
  return num * num;
};

let square2 = (num) => {
  return num * num;
};

let square3 = (num) => {
  //puede ser sin () para js es lo mismo
  //Si la usamos como callback se usa la fecha para la palabra function, si es para reutilizar entonces no
  return num * num;
};

let square4 = num => num * num; //no usamos return

movies.forEach((movie) => {
  console.log(movie * 2); 

const movies = [];*/

const doubles = numbers.map((num) => num * 2);

function map1() {
  console.log(doubles);
}

const UpperTitles = movies.map((movie) => movie.title.toUpperCase());
//return movie.score returns only the score.

function map2() {
  console.log(UpperTitles);
}

const prices = [100, 200, 300];
const pricesWithTax = prices.map((p) => p * 1.16);

const users = [{ name: "Ana" }, { name: "Luis" }];
const names = users.map((u) => u.name);

numbers.filter((n) => {
  return n < 20;
});

const numfilter = numbers.filter((n) => 15 >= n);

const badMovies = movies.filter((m) => m.score < 70);
const recentMovies = movies.filter((m) => m.year > 2000);
const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map((m) => m.title);
//Mapeando las peliculas buenas para ver los títulos en una sola línea
const wishlistMovies = movies.filter((m) => m.score > 80).map((m) => m.title);

const move = movies
  .filter((m) => m.year < 2000)
  .filter((m) => m.score > 75)
  .map((m) => m.title);

const oldies = movies
  .filter((m) => m.score > 75)
  .filter((m) => m.year < 2000)
  .map((m) => m.title);

const older = movies
  .filter((m) => m.score > 75)
  .filter((m) => m.year < 2000)
  .map((m) => ({ title: m.title, year: m.year }));

// ¿Cómo separaríamos los productos disponibles?
const products = [
  { name: "Laptop", price: 15000, stock: 5 },
  { name: "Mouse", price: 300, stock: 0 },
  { name: "Teclado", price: 800, stock: 10 },
  { name: "Monitor", price: 4000, stock: 0 },
  { name: "Audífonos", price: 1200, stock: 3 },
];

const result = products
  .filter((p) => p.stock > 0 && p.price > 1000)
  .map((p) => p.name);

console.log(result);

var morethan9, morethan10, allpair;
const everyex = () => {
  morethan9 = numbers.every((x) => x > 9);
  morethan10 = numbers.every((x) => x > 10);
  allpair = (vec) => vec.every((x) => x % 2 == 0);
};

//O por ejemplo cuando revisamos si tenemos todos los datos
const inputs = ["Juan", "Perez", ""];
const isValid = inputs.every((i) => i !== "");

var hayalgunanueva, mipelimalafavorita, anypair;
const someex = () => {
  hayalgunanueva = movies.some((movie) => movie.year > 2015);
  mipelimalafavorita = movies.some((movie) => movie.title === "Sharknado");
  anypair = (vec) => vec.some((x) => x % 2 == 0);
};

//Hay un administrador en el sistema?
const usuarios = [
  { name: "Ana", isAdmin: false },
  { name: "Luis", isAdmin: false },
  { name: "Carlos", isAdmin: true },
];

const hayAdmin = usuarios.some((user) => user.isAdmin);

array.reduce((acumulador, elementoActual) => {
  return nuevoValor;
}, valorInicial);

var sumatodo = numbers.reduce((a, b) => a + b);

var mayordivisible = numbers.reduce((a, b) => {
  if (b % 3 == 0) {
    if (b > a) return b;
    else return a;
  } else return a;
}, -1);

const bestRated = movies.reduce((acum, currMovie) => {
  if (currMovie.score > acum.score) {
    return currMovie;
  }
  return acum;
});

const mostRecent = movies.reduce((acum, currMovie) => {
  if (currMovie.year > acum.year) {
    return currMovie;
  }
  return acum;
});

// Por ejemplo reduce se puede usar para agrupar objetos por una propiedad específica.
const redusers = [
  { name: "Ana", role: "admin", age: 28, active: true },
  { name: "Luis", role: "user", age: 22, active: true },
  { name: "Carlos", role: "admin", age: 35, active: false },
  { name: "María", role: "user", age: 19, active: true },
  { name: "Pedro", role: "moderator", age: 30, active: true },
  { name: "Sofía", role: "user", age: 25, active: false },
  { name: "Jorge", role: "moderator", age: 40, active: true },
  { name: "Lucía", role: "admin", age: 31, active: true },
];

const grouped = redusers.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }

  acc[user.role].push(user);

  return acc;
}, {});

console.log(grouped);

setTimeout(funcion, tiempoEnMilisegundos);

const dotimeout = () => {
  console.log("HELLO!!!...");
  setTimeout(() => console.log("...are you still there?"), 3000);
  console.log("GOODBYE!!");
};
setTimeout(() => {
  alert("Tu sesión está por expirar");
}, 5000);

//keyword 'this' in arrow functions refers to the value of 'this' when the function is created
const person = {
  firstName: "Viggo", //arrow function expresion, la funcion esta en persona, no en la ventana
  lastName: "Mortensen",
  fullName: function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  badfullName: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    console.log(this);
    setTimeout(() => {
      console.log("Tring in arrow function");
      console.log(this);
      console.log(this.fullName());
    }, 3000);
    setTimeout(function () {
      console.log("Tring in normal function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 6000);
  },
  shoutName2: () => {
    console.log(this); //WINDOW
    setTimeout(() => {
      console.log("Tring in arrow function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 3000);
    setTimeout(function () {
      console.log("Tring in normal function");
      console.log(this); //WINDOW
      console.log(this.fullName());
    }, 6000);
  },
};
