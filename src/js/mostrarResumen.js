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

  
}
