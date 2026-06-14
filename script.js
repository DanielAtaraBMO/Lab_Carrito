let contadorCarrito = 0;
let totalPrecio = 0;
const botones = document.querySelectorAll(".btn-agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    let nombre = boton.dataset.nombre;
    let precio = boton.dataset.precio;
    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(nombre, precio) {
  let contador = document.getElementById("badge");
  let Total = document.getElementById("total-carrito");

  let Producto = document.createElement("li");
  Producto.classList.add("elementos");
  Producto.textContent = `${nombre} - $${precio}`;

  const eliminar = document.createElement("button");
  eliminar.innerText = "Eliminar(X)";
  eliminar.classList.add("btn-eliminar");

  eliminar.addEventListener("click", () => {
    Producto.remove();
    contadorCarrito--;
    contador.textContent = contadorCarrito;
    totalPrecio -= parseInt(precio);
    Total.textContent = totalPrecio;

    actualizarCarritoVisual();
  });

  Producto.appendChild(eliminar);

  document.getElementById("lista-carrito").appendChild(Producto);

  contadorCarrito++;
  totalPrecio += parseInt(precio);

  contador.textContent = contadorCarrito;
  Total.textContent = totalPrecio;

  actualizarCarritoVisual();
}

function actualizarCarritoVisual() {
  let vacio = document.getElementById("carrito-vacio");

  if (contadorCarrito === 0) {
    vacio.style.display = "block";
  } else {
    vacio.style.display = "none";
  }
}

const btnVaciar = document.getElementById("btn-vaciar");

btnVaciar.addEventListener("click", () => {
  document.getElementById("lista-carrito").innerHTML = "";

  contadorCarrito = 0;
  document.getElementById("badge").textContent = contadorCarrito;
  let Total = document.getElementById("total-carrito");

  totalPrecio = 0;
  Total.textContent = totalPrecio;

  actualizarCarritoVisual();
});
