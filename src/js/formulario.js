function almacenarNombreCita() {
  const nombreInput = document.getElementById("nombre")

  nombreInput.addEventListener("input", e => {
    // trim() elimina los espacios al principio y al final
    const nombreTexto = e.target.value.trim()

    if (nombreTexto === "" || nombreTexto.length <= 3) {
      mostrarAlerta("Nombre no válido", "error")
    } else {
      const alerta = document.querySelector(".alerta")
      if (alerta) {
        alerta.remove()
      }
      cita.nombre = nombreTexto
    }
  })
}

function almacenarFechaCita() {
  const fechaInput = document.getElementById("fecha")

  fechaInput.addEventListener("input", e => {
    // retorna un numero que representa el dia siendo domingo el 0 y sabado el 6
    const dia = new Date(e.target.value).getUTCDay()

    if ([0, 6].includes(dia)) {
      fechaInput.value = ""
      mostrarAlerta("No se aceptan citas los Fines de Semana", "error")
    } else {
      cita.fecha = fechaInput.value
    }
  })
}

function almacenarHoraCita() {
  const horaInput = document.getElementById("hora")
  horaInput.addEventListener("change", e => {
    const horaCita = e.target.value
    const hora = horaCita.split(":")

    if (hora[0] < 10 || (hora[0] >= 22 && hora[1] > 0) ) {
      setTimeout(() => {
        horaInput.value = ""
      }, 1000);
      mostrarAlerta("Ya no se aceptan citan", "error")
    } else {
      cita.hora = horaCita
    }
  })
}

function mostrarAlerta(mensaje, tipo) {

  // si hay una alerta previa, entonces no crear otra
  const alertaPrevia = document.querySelector(".alerta")
  if (alertaPrevia) {
    return
  }

  const alerta = document.createElement("DIV")
  alerta.classList.add("alerta")
  alerta.textContent = mensaje

  if (tipo === "error") {
    alerta.classList.add("error")
  }

  // inserto la alerta en el HTML
  const formulario = document.querySelector(".formulario")
  formulario.appendChild(alerta)

  // elimino la alerta despues de 3 segundos
  setTimeout(() => {
    alerta.remove()
  }, 3000);
}

function deshabilitarFechaAnterior() {
  const fechaInput = document.getElementById("fecha")
  const fechaActual = new Date()
  const year = fechaActual.getFullYear()
  let mes = fechaActual.getMonth() + 1 // +1 porque esto es un array asi que su indice comienza desde 0

  if (mes < 10) {
    mes = "0" + mes
  }

  const dia = fechaActual.getDate() + 1
  // formato deseado: aaaa-mm-dd
  const fechaDeshabilitada = `${year}-${mes}-${dia}`

  fechaInput.min = fechaDeshabilitada
}
