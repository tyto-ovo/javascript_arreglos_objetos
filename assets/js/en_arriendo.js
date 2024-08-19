const propiedades_alquiler = [
  {
    nombre: "Apartamento amoblado para estudiantes",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Apartamendo para estudiantes, de marzo a diciembre, amoblado y cerca del metro",
    ubicacion: "Cristobal Colon 23948, santiago, Chile",
    habitaciones: 5,
    costo: 2000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento clásico",
    src: "https://images.unsplash.com/photo-1527772482340-7895c3f2b3f7?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Apartamento construido en 1970 con detalles de epoca y cielos altos",
    ubicacion: "Pepin central, valparaiso, Chile",
    habitaciones: 5,
    costo: 2800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento recien remodelado",
    src: "https://plus.unsplash.com/premium_photo-1683769252575-e986af039184?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Apartamento recien decorado por famosa artista",
    ubicacion: "Libertad 193287, viña del mar, Chile",
    habitaciones: 2,
    costo: 1750,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Moderna",
    src: "https://images.unsplash.com/photo-1494458453337-e9062e968178?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa minimalista con altos cielos y dos pisos",
    ubicacion: "Agua santa 34870, viña del mar, Chile",
    habitaciones: 4,
    costo: 2800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

let elementoAlquiler = document.getElementById("arriendos");
let htmlAlquiler = ``;

for (let alquilerCard of propiedades_alquiler) {
  htmlAlquiler += `
  <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${alquilerCard.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${alquilerCard.nombre}</h5>
                <p class="card-text">
                  ${alquilerCard.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${
                    alquilerCard.ubicacion
                  }
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    alquilerCard.habitaciones
                  } Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquilerCard.costo.toLocaleString(
                  "de-DE"
                )}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
      `;
}

elementoAlquiler.innerHTML = htmlAlquiler;

function tresPrimerosArriendos() {
  let tresArriendos = propiedades_alquiler.slice(0, 3);
  let toRent = document.getElementById("tresRent");

  let paraInsertar = ``;
  for (let casa of tresArriendos) {
    paraInsertar += `
          <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src=${casa.src}
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">${casa.nombre}</h5>
                  <p class="card-text">
                    ${casa.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${casa.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${casa.habitaciones} Habitaciones
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${casa.costo.toLocaleString(
                    "de-DE"
                  )}</p>
                  <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                  </p>
                  <p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                  </p>
                </div>
              </div>
            </div>
          `;
  }
  toRent.innerHTML = paraInsertar;
}
