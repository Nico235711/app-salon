// toma el servicio que quiero añadir
function agregarServicio(servicio) {
  const { servicios } = cita

  // tomo una copia de los servicios del objeto cita para no mutarlo
  cita.servicios = [...servicios, servicio]
}

// toma un id del servicio que quiero eliminar
function eliminarServicio(id) {
  const { servicios } = cita

  cita.servicios = servicios.filter(servicio => (
    servicio.id !== id
  ))
}