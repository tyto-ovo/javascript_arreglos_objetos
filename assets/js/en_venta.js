const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 300000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road,Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 80000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue,Skyview City, CA 56789",
    habitaciones: 3,
    costo: 350000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Luminoso Apartamento en la playa",
    src: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Este apartamento se encuentra cerca de la playa y con una gran vista",
    ubicacion: "Costa de montemar 19980, concon, Chile",
    habitaciones: 3,
    costo: 120000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Rica cabaña",
    src: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Acogedora cabaña en la montaña con gran bosque para largas caminatas",
    ubicacion: "Lago calafquen 278945, pucon, Chile",
    habitaciones: 2,
    costo: 80000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa para nueva familia",
    src: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa en barrio familiar, cerca de 3 colegios y 2 plazas",
    ubicacion: "Los romeros 37, concon, Chile",
    habitaciones: 4,
    costo: 150000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de un ambiente",
    src: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Apartamento central con orientacion norte y muy buen barrio",
    ubicacion: "San Martin 20563, viña del mar, Chile",
    habitaciones: 1,
    costo: 100000,
    smoke: false,
    pets: true,
  },
];

let elementoVentas = document.getElementById("ventas");
let htmlVentas = ``;

for (let ventasCard of propiedades_venta) {
  htmlVentas += `
<div class="col-md-4 mb-4">
          <div class="card">
            <img
              src=${ventasCard.src}
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">${ventasCard.nombre}</h5>
              <p class="card-text">
                ${ventasCard.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${ventasCard.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${
                  ventasCard.habitaciones
                } Habitaciones
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${ventasCard.costo.toLocaleString(
                "es-ES"
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

elementoVentas.innerHTML = htmlVentas;

function tresPrimerasVentas() {
  let tresVentas = propiedades_venta.slice(0, 3);
  let toSell = document.getElementById("tresSell");

  let paraInsertar = ``;
  for (let casa of tresVentas) {
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
  toSell.innerHTML = paraInsertar;
}
