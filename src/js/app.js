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


async function mostrarServicios() {

  try {
    const respuesta = await fetch("./servicios.json")
    const db = await respuesta.json()

    const { servicios } = db

    // generar html
    servicios.forEach(servicio => {
      const { id, nombre, precio } = servicio

      // dom scripting
      const nombreServicio = document.createElement("P")
      nombreServicio.textContent = nombre
      nombreServicio.classList.add("nombre-sevicio")

      const precioServicio = document.createElement("P")
      precioServicio.textContent = `$${precio}`
      precioServicio.classList.add("precio-sevicio")

      const servicioDiv = document.createElement("DIV")
      servicioDiv.append(nombreServicio, precioServicio)
      servicioDiv.classList.add("servicio")
      servicioDiv.dataset.idServicio = id

      // seleccionar los servicios
      servicioDiv.onclick = seleccionarServicio

      // agrego mi div al html
      const listadoServicios = document.querySelector(".listado-servicios")
      listadoServicios.appendChild(servicioDiv)
    });

  } catch (error) {
    console.error(error);
  }
}

function seleccionarServicio(e) {

  let elemento

  // forzar que el elemento al cual le de click sea un div
  if (e.target.tagName === "P") {
    elemento = e.target.parentElement
  } else {
    elemento = e.target
  }

  if (elemento.classList.contains("seleccionado")) {
    elemento.classList.remove("seleccionado")
  } else {
    elemento.classList.add("seleccionado")
  }
}

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
