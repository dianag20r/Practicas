/*fetch("http://www.dnd5eapi.co/api/classes/monk")
  .then((res) => {
    console.log("Datos de respuesta:", res);
    return res.json();
  })
  .then((data) => {
    console.log("Datos obtenidos:");
    console.log(data); 
    datosConsola = data;
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
*/

let datosConsola;
fetch("https://randomuser.me/api")
  .then((res) => {
    console.log("Datos de respuesta:", res);
    return res.json();
  })
  .then((data) => {
    console.log("Datos obtenidos:");
    console.log(data.results[0].location.state);
    datosConsola = data;
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
