async function personaje() {
  const id1 = document.getElementById("id1").value;
  const id2 = document.getElementById("id2").value;
  const [datos1, datos2] = await Promise.all([
    obtenerdatospersonaje(id1),
    obtenerdatospersonaje(id2),
  ]);
  actualizarelementoshtml(datos1, datos2);
}
async function obtenerdatospersonaje(id) {
  const resultado = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await resultado.json();
  return {
    nombre: data.name,
    especie: data.species,
    estado: data.status,
    episodios: data.episode.length,
    imagen: data.image,
  };
}
function actualizarelementoshtml(datos1, datos2) {
  const divDatos1 = document.getElementById("datos1");
  const divDatos2 = document.getElementById("datos2");
  divDatos1.innerHTML = `
    <h2>Personaje 1</h2>
    <p>${datos2.imagen}</p>
    <p>Nombre: ${datos1.nombre}</p>
    <p>Especie: ${datos1.especie}</p>
    <p>Estado: ${datos1.estado}</p>
    <p>Episodios: ${datos1.episodios}</p>
  `;
  divDatos2.innerHTML = `
    <h2>Personaje 2</h2>
    <p>${datos2.imagen}</p>
    <p>Nombre: ${datos2.nombre}</p>
    <p>Especie: ${datos2.especie}</p>
    <p>Estado: ${datos2.estado}</p>
    <p>Episodios: ${datos2.episodios}</p>
  `;
}
if (datos1.episodios > datos2.episodios) {
  alert(
    `El  (${datos1.episodios}) es mayor que el segundo  (${datos2.episodios})`
  );
} else if (datos2.episodios > datos1.episodios) {
  alert(`El (${datos2.episodios}) es mayor que el   (${datos1.episodios})`);
} else {
  alert("Ambos tienen la misma cantida de episodios ");
}
/* {
    "id": 5,
    "name": "Jerry Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/5",
    "created": "2017-11-04T19:26:56.301Z"
} */
