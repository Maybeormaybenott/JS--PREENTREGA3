document.addEventListener("DOMContentLoaded", function () {
  // Mis productos
  const productos = [
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
      imagen: "./imgs/relojes/2.jpg",
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
      imagen: "./imgs/relojes/3.jpg",
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
      imagen: "./imgs/mochilas/1.jpeg",
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
      imagen: "./imgs/mochilas/2.jpg",
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
      imagen: "./imgs/bolsos/1.jpeg",
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
      imagen: "./imgs/cartucheras/1.webp",
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

  // Agregar productos al HTML
  const listaProductos = document.getElementById("listaProductos");
  productos.forEach((producto) => {
    const tarjeta = `<div class="col-md-4 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <img src="${producto.imagen}">
                          <p class="card-text">Precio: $${producto.precio.toFixed(
                            2
                          )}</p>
                          <button class="btn btn-primary agregarAlCarrito" data-id="${
                            producto.id
                          }">Agregar al carrito</button>
                          <button class="btn btn-danger eliminarDelCarrito" data-id="${
                            producto.id
                          }">Eliminar del carrito</button>

                        </div>
                      </div>
                    </div>`;
    listaProductos.insertAdjacentHTML("beforeend", tarjeta);
  });

  // carrito
  let productosCarrito = [];

  // agregar al carrito
  const agregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
  agregarAlCarrito.forEach((boton) => {
    boton.addEventListener("click", function (evento) {
      const idProducto = evento.target.getAttribute("data-id");
      const producto = productos.find((p) => p.id === idProducto);
      if (producto) {
        productosCarrito.push(producto);
        actualizarContadorCarrito();
      }
    });
  });

  // Eliminar del carrito
  const carritoCompras = document.getElementById("carritoCompras");
  carritoCompras.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("eliminarDelCarrito")) {
      const idProducto = evento.target.getAttribute("data-id");
      const index = productosCarrito.findIndex((p) => p.id === idProducto);
      if (index !== -1) {
        productosCarrito.splice(index, 1);
        actualizarContadorCarrito();
      }
    }
  });

  // Actualizar contador del carrito
  function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.textContent = productosCarrito.length;
  }
});
