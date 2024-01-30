function mostrarResumen() {
  // destructuring
  const { nombre, fecha, servicios, hora } = cita
  const resumen = document.querySelector(".contenido-resumen")

  // limpio el html previo
  resumen.innerHTML = ""

  // validacion de objeto
  if (Object.values(cita).includes("")) {
    const sinCita = document.createElement("P")
    sinCita.textContent = "Faltan servicios, fecha, hora o nombre"
    sinCita.classList.add("invalidar-cita")
    resumen.append(sinCita)

    return
  }

  const serviciosCita = document.createElement("DIV")
  serviciosCita.classList.add("resumen-servicios")

  servicios.forEach(servicio => {

    const { nombre, precio } = servicio
    const contenedorServicio = document.createElement("DIV")
    contenedorServicio.classList.add("contenedor-servicio")

    const nombreServicio = document.createElement("P")
    nombreServicio.classList.add("nombre-servicio")
    nombreServicio.textContent = nombre

    const precioServicio = document.createElement("P")
    precioServicio.classList.add("precio-servicio")
    precioServicio.textContent = precio

    contenedorServicio.append(nombreServicio, precioServicio)
    serviciosCita.appendChild(contenedorServicio)
  });
  
  const nombreCita = document.createElement("P")
  nombreCita.innerHTML = `<span>Nombre: </span>${nombre}`
  
  const fechaCita = document.createElement("P")
  fechaCita.innerHTML = `<span>Fecha: </span>${fecha}`
  
  const horaCita = document.createElement("P")
  horaCita.innerHTML = `<span>Hora: </span>${hora}`

  resumen.append(nombreCita, fechaCita, horaCita, serviciosCita)
}