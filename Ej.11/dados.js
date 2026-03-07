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
            caras = 100;
                break;
            default: 
            alert("La opcion ingresada no fue corrrecta");
                break;
}
if(!isNaN(caras)){
    let resultado = Math.floor(Math.random()* caras + 1);
    alert(`El resultado del dado fue ${resultado}`);
  }
}