// MIS PRODUCTOS
const arrayProductos = [
  // RELOJES
  {
    id: "reloj-1",
    nombre: "Reloj enchapado en oro 18 kilates",
    imagen: "./imgs/relojes/1.jpg",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    tipo: "Enchapado",
    material: "Oro",
    malla: "Metal bañado",
    genero: "Unisex",
    precio: 100,
  },
  {
    id: "reloj-2",
    nombre: "Reloj discreto oro",
    imagen: "./imgs/anillos/2.jpg",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    tipo: "Discreto",
    material: "Oro 18k",
    malla: "Metal bañado",
    genero: "Unisex",
    precio: 100,
  },
  {
    id: "reloj-3",
    nombre: "Reloj formal malla eco-cuero",
    imagen: "./imgs/anillos/3.jpg",
    categoria: {
      nombre: "Relojes",
      id: "relojes",
    },
    tipo: "Discreto",
    material: "Acero inoxidable",
    malla: "Eco-cuero",
    genero: "Unisex",
    precio: 100,
  },

  // ANILLOS

  {
    id: "anillo-1",
    nombre: "Anillo en acero inox",
    imagen: "./imgs/anillos/1.jpg",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    tipo: "Discreto",
    material: "Acero inoxidable",
    genero: "Unisex",
    precio: 100,
  },

  {
    id: "anillo-2",
    nombre: "Anillo GD-3",
    imagen: "./imgs/anillos/2.jpg",
    categoria: {
      nombre: "Anillos",
      id: "anillos",
    },
    tipo: "Elegante",
    material: "Acero inoxidable",
    genero: "Unisex",
    precio: 100,
  },

  // MOCHILAS
  {
    id: "mochilas-1",
    nombre: "Mochila práctica unisex",
    imagen: "./imgs/mochilas/1.jpg",
    categoria: {
      nombre: "Mochilas",
      id: "mochilas",
    },
    tipo: "Práctica y anti-robo",
    material: "Lona impermeable",
    genero: "Unisex",
    precio: 100,
  },

  {
    id: "mochilas-2",
    nombre: "Mochila de cuero",
    imagen: "./imgs/anillos/2.jpg",
    categoria: {
      nombre: "Mochilas",
      id: "mochilas",
    },
    tipo: "Práctica y cómoda",
    material: "Eco-cuero",
    genero: "Unisex",
    precio: 100,
  },

  // BOLSOS

  {
    id: "bolso-1",
    nombre: "Bolso de mano",
    imagen: "./imgs/bolsos/1.jpg",
    categoria: {
      nombre: "Bolsos",
      id: "bolsos",
    },
    tipo: "Elegante",
    material: "Algodón orgánico",
    genero: "Unisex",
    precio: 100,
  },

  // CARTUCHERAS

  {
    id: "cartuchera-1",
    nombre: "Cartuchera vichy",
    imagen: "./imgs/cartucheras/1.jpg",
    categoria: {
      nombre: "Cartucheras",
      id: "cartucheras",
    },
    tipo: "Elegante",
    material: "Eco-cuero",
    genero: "Unisex",
    precio: 100,
  },
];

const productosContenedor = document.querySelector("#productos-contenedor");

function cargarProductos() {
  arrayProductos.forEach((producto) => {
    const div = document.createElement("div");
  });
}
