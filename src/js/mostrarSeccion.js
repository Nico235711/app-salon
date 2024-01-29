function mostrarSeccion() {

  // eliminar la seccion anterior
  const seccionAnterior = document.querySelector(".mostrar-seccion")
  if (seccionAnterior) {
    seccionAnterior.classList.remove("mostrar-seccion")
  }

  const seccion = document.getElementById(`paso-${pagina}`)
  seccion.classList.add("mostrar-seccion")

  // elimina la clase .actual del tab anterior
  const tabAnterior = document.querySelector(".tabs button.actual")
  if (tabAnterior) {
    tabAnterior.classList.remove("actual")
  }

  // resalta el tab actual
  const tab = document.querySelector(`[data-paso="${pagina}"]`)
  tab.classList.add("actual")
}