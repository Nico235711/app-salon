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

function mostrarResumen() {
  // destructuring
  const { nombre, fecha, servicios, hora } = cita
  const resumen = document.querySelector(".contenido-resumen")

  // validacion de objeto
  if (Object.values(cita).includes("")) {
    const sinCita = document.createElement("P")
    sinCita.textContent = "Faltan servicios, fecha, hora o nombre"
    sinCita.classList.add("invalidar-cita")
    resumen.append(sinCita)
  }

  // TODO: continuar video 16
}