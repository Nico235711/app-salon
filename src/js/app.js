let pagina = 1
const cita = {
  nombre: "",
  fecha: "",
  hora: "",
  servicios: []
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp()
})

function iniciarApp() {

  mostrarServicios()

  // resalta el div actual segun el tab al que se presiona
  mostrarSeccion()

  // oculta o muestra la seccion segun el tab al que se presiona
  cambiarSeccion()

  // pagina siguiente
  mostrarPaginaSiguiente()

  // pagina anterior
  mostrarPaginaAnterior()

  // comprueba la pagina para mostrar u ocultar la paginacion
  mostrarBotonesPaginacion()

  // Muestra el resumen de la cita (o un mensaje de error en caso de no pasar la validacion)
  mostrarResumen()
}

