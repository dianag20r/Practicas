var bar = "Bar"; //permite redeclarar, no podemos usar bar causa muchos problemas
let foo = "Foo"; ///permite reasignar //podemos usar let o const

console.log(bar,foo);

{
var bar = "Bar_in";
console.log(bar,foo);
}

console.log(foo);
const PI = 3.14159265;

let firstName = "Diana";
let lastname = "Garcia";
let fullname = firstName + " " + lastname; //concatenacion
console.log(fullname);
console.log(fullname[6]); //acceder a un caracter de la cadena
console.log(fullname.length); //length es una propiedad que nos dice la cantidad de caracteres que tiene la cadena, incluyendo espacios

let stringperro = 'Husky'.concat("Es una raza de perro");
console.log(stringperro.includes("perro")); //includes es un metodo que nos dice si una cadena contiene otra cadena, devuelve true o false
console.log(stringperro.indexOf("perro")); //indexOf es un metodo que nos dice la posicion de la primera ocurrencia de una cadena dentro de otra cadena, devuelve -1 si no encuentra la cadena
console.log(stringperro.replace("perro", "gato")); //replace es un metodo que nos permite reemplazar una cadena por otra cadena, devuelve una nueva cadena con el reemplazo realizado  
console.log(stringperro.toUpperCase()); //toUpperCase es un metodo que nos permite convertir una cadena a mayusculas, devuelve una nueva cadena con las letras en mayusculas
///////////////////////////////////////////////////////

let dog = 4;
let cat = 3;
`I saw ${dog + cat} animals`;

let opcion = 3;
//if(false==0){
//    console.log("Es igual");
//}
// else{
//    console.log("distinto");
//}

console.log("Conexion de dados.js");
function dadoAlumno(){ 
let opcion = parseInt(prompt("Tira un dado:\n 1.- 6 caras (1 a 6) 2. 20 caras (1 a 20) 3.- 100 caras (1 a 100)")); //userAge
let caras = NaN;
switch(opcion){
    case 1:
        caras = 6;
        break;
        case 2:
            caras = 20;
                break;
            case 3: 
            resultado = 100;
                break;
            default: 
            alert("La opcion ingresada no fue corrrecta");
                break;
}
let resultado = Math.floor(Math.random()* caras + 1);
alert(`El resultado del dado fue ${resultado}`);
}