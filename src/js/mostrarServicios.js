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