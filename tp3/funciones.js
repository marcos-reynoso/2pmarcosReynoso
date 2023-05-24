function randomuser() {
  fetch("https://randomuser.me/api/")
    .then((Response) => Response.json())
    .then((datosr) => {
      console.log(datosr);
      mostrardatosr(datosr.results[0]);
    });
}

function morty() {
  const random = Math.floor(Math.random() * 826);
  fetch(`https://rickandmortyapi.com/api/character/${random}`)
    .then((Response) => Response.json())
    .then((datosm) => mostrardatosm(datosm));
}

function mostrardatosm(datosm) {
  const rick = document.getElementById("morty");
  rick.innerHTML = `
<img src="${datosm.image}" >
<p> nombre: ${datosm.name} </p>
<p> genero: ${datosm.gender} </p>
`;
}
function mostrardatosr(datosr) {
  const usario = document.getElementById("randomuser");
  usario.innerHTML = `
    <img src="${datosr.picture.large}" >
    <p> nombre: ${datosr.name.title} ${datosr.name.first}  ${datosr.name.last}</p>
    <p> genero: ${datosr.gender} </p>
    <p> dni: ${datosr.id.value} </p>
    <p> latitud: ${datosr.location.coordinates.latitude} </p>
    <p> longitud: ${datosr.location.coordinates.longitude} </p>
  `;
}
function buscar() {
  randomuser();
  morty();
}
