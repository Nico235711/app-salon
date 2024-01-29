function cambiarSeccion() {
  const tabs = document.querySelectorAll(".tabs button")

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      // cambio el numero de la pagina
      pagina = parseInt(e.target.dataset.paso)

      // llamar a la funcion mostrarSeccion
      mostrarSeccion()
      mostrarBotonesPaginacion()
    })
  });
}

function mostrarPaginaSiguiente() {
  const paginaSiguiente = document.getElementById("siguiente")
  paginaSiguiente.addEventListener("click", () => {
    pagina++;
    mostrarBotonesPaginacion()
  })
}

function mostrarPaginaAnterior() {
  const paginaAnterior = document.getElementById("anterior")
  paginaAnterior.addEventListener("click", () => {
    pagina--;
    mostrarBotonesPaginacion()
  })
}

function mostrarBotonesPaginacion() {
  const paginaAnterior = document.getElementById("anterior")
  const paginaSiguiente = document.getElementById("siguiente")

  if (pagina === 1) {
    paginaAnterior.classList.add("ocultar")
  } else if (pagina === 3) {
    paginaSiguiente.classList.add("ocultar")
    paginaAnterior.classList.remove("ocultar")
  } else {
    paginaAnterior.classList.remove("ocultar")
    paginaSiguiente.classList.remove("ocultar")
  }
  mostrarSeccion() // cambia la seccion que se muestra por la de la pagina
}