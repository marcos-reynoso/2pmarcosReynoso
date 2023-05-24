async function randomuser() {
  const Response = await fetch("https://randomuser.me/api/");
  const datosr = await Response.json();
  return datosr.results[0];
}

async function morty() {
  const random = Math.floor(Math.random() * 826);
  const Response = await fetch(
    `https://rickandmortyapi.com/api/character/${random}`
  );
  const datosm = await Response.json();
  return datosm;
}

function mostrardatosm(datosm) {
  const rick = document.getElementById("morty");
  rick.innerHTML = `
  <div class="${datosm.gender.toLowerCase()}">
  <img src="${datosm.image}" >
  <p> nombre: ${datosm.name} </p>
  <p> genero: ${datosm.gender} </p>
  `;
}

function mostrardatosr(datosr) {
  const usario = document.getElementById("randomuser");
  usario.innerHTML = `
  <div class="${datosr.gender}">
    <img src="${datosr.picture.large}" >
    <p> nombre: ${datosr.name.title} ${datosr.name.first}  ${datosr.name.last}</p>
    <p> genero: ${datosr.gender} </p>
    <p> dni: ${datosr.id.value} </p>
    <p> latitud: ${datosr.location.coordinates.latitude} </p>
    <p> longitud: ${datosr.location.coordinates.longitude} </p>
    `;
}
function categoriacomun(randomuser, morty) {
  const resultado = document.getElementById("resultado");
  if (randomuser.toLowerCase() === morty.toLowerCase()) {
    resultado.innerHTML = `match`;
  } else {
    resultado.innerHTML = `no match`;
  }
}

async function buscar() {
  const datosr = await randomuser();
  const datosm = await morty();
  mostrardatosm(datosm);
  mostrardatosr(datosr);
  categoriacomun(datosr.gender, datosm.gender);
}
