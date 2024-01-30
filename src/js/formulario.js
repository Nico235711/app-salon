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

  // TODO: continuar video #19
}