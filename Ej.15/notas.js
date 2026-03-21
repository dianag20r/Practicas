// function rollDie(numSides = 6) {
//   console.log(Math.floor(Math.random() * numSides) + 1);
// }

// function greet(nombre = "Fulanito", mensaje = "Hola") {
//   console.log(`${mensaje} ${nombre}`);
// }

// Magia negra: const numbers=[...Array(16).keys()].map((x)=>x+10)

// const numbers = [
//     10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
// ];
// console.log(Math.max(...numbers));
// console.log(..."Hola mundo");

// const mexicanDogs = ["Chihuahua", "Calupoh"];
// const cuteDogs = ["Husky", "Akita", "Samoyedo"];
// const allDogs = [...mexicanDogs, ...cuteDogs];

// const ingeniero = { id: 451324, job: "electric", lastName: "Meza" };
// const persona = { id: 451324, firstName: "Hernan", lastName: "Mesa" };
// const trabajador = { ...ingeniero, ...persona };

// const newUserForm = {
//     email: "example@gmail.com",
//     password: "123456",
//     username: "sad3x4mpleboy",
// };
// const newUser = { ...newUserForm, id: 5, isAdmin: false };

// function verArgumentos(a,b,c) {
//     console.log(arguments(1)); //flecha no funciona porque argumentos no esta en window
// }
// verArgumentos("Hola",202,-0.32)

// function sumaPara(initial, ...nums) {  //pide un valor y luego n valores
//     let result = nums.reduce((total, num) => total + num, -initial);
//     if (result == 0) return "Felicidades, sumaste:" + arguments[0];
//     else return "El primer parámetro debe ser igual a la suma de los demás";}

const numbers = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];
const [primero, segundo, ...resto] = numbers;

const ingeniero = { id: 451324, job: "electric", lastName: "Meza" };
const persona = { id: 451324, firstName: "Hernan", lastName: "Mesa" };
const trabajador = { ...ingeniero, ...persona };

const {
  firstName: nombre,
  job,
  id = 0,
  lastName: apellido,
  age: edad = 0,
} = trabajador;

function printData({ firstName: fname, lastName: lname }) {
  return `Trabajador:${fname} :${lname}`;
}

console.log(printData(trabajador));

const inventario = [
  {
    id: 1,
    name: "TORT1K",
    description: "1K de tortilla",
    price: 20,
    stock: 2,
    maxStock: 12,
    restock: "2d",
  },
  {
    id: 2,
    name: "KLGSFL",
    description: "Froot loops caja",
    price: 40,
    stock: 5,
    maxStock: 6,
    restock: "1w",
  },
  {
    id: 3,
    name: "BRCHIP",
    description: "Chips variado",
    price: 18,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 4,
    name: "SRJL1L",
    description: "1L Leche sello rojo",
    price: 25,
    maxStock: 12,
    restock: "2w",
  },
  {
    id: 5,
    description: "1k Huevo guadalupana",
    price: 45,
    stock: 6,
    maxStock: 30,
    restock: "2w",
  },
  {
    id: 6,
    name: "FJPR1K",
    description: "1K frijol peruano",
    price: 40,
    maxStock: 10,
    restock: "1w",
  },
  {
    id: 7,
    name: "CSTCHJ",
    description: "Lata de chiles jalapeños la costeña",
    price: 12,
    stock: 12,
    maxStock: 12,
    restock: "1w",
  },
];

let prodStock = inventario.filter((prod) => prod.maxStock >= 20);
Let prodStock=inventario.filter(({maxStock}) => maxStock >= 20);

let MappedStock = prodStock.map(({ description, stock, maxStock:max }) => {
  return `${description} tiene un stock de ${stock}/${max}`;
});

muchoStock.map(({description,stock,maxStock})=>{
    return `${description} tiene un stock de ${stock}/${maxStock}`
})
