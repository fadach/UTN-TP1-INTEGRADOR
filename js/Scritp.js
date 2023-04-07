// Preload
var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};
spinner();

// form de reclamo
function validateName() {
  // si el id nombre tiene un valor valida a true
  if ($("#nombre").val()) {
    $("#email").prop("disabled", false);
  } else {
    $("#email").prop("disabled", true);
  }
}

function validateEmail() {
  // si el id email tiene un valor valida a true
  if ($("#email").val()) {
    $("#btnSiguiente1").prop("disabled", false);
  } else {
    $("#btnSiguiente1").prop("disabled", true);
  }
}

function validateComponent() {
  //si el id componente tiene un valor valida a true
  if ($("#componente").val()) {
    $("#problema").prop("disabled", false);
  } else {
    $("#problema").prop("disabled", true);
  }
}

function validateProblem() {
  // si el id problema tiene un valor valida a true
  if ($("#problema").val()) {
    $("#btnSiguiente2").prop("disabled", false);
  } else {
    $("#btnSiguiente2").prop("disabled", true);
  }
}

function showDetalleProblema() {
  // si le hago click a la pestaña detalle del problema me la muestra
  $("#tabMenu a[href='#detalle-problema']").tab("show");
}

function showConfirmacion() {
  // muestra los valores completados en el form
  $("#nombreConfirm").text($("#nombre").val());
  $("#emailConfirm").text($("#email").val());
  $("#componenteConfirm").text($("#componente").val());
  $("#problemaConfirm").text($("#problema").val());
  // si le haces click a su solapa te la muestra
  $("#tabMenu a[href='#confirmacion']").tab("show");
}

let confirmacion = document.getElementById("confirmacion");

let generarPDF = document.getElementById("btnExportar");
window.jsPDF = window.jspdf.jsPDF;

function generandoPDF() {
  var doc = new jsPDF();

  //palabra dreams
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");

  doc.text(12, 15, "DREA");

  doc.setTextColor(255, 77, 41);
  doc.text(34, 15, "MS");

  doc.setTextColor(10, 10, 10);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");

  doc.text(130, 15, "Comprobante de reclamo");
  //Linea divisoria
  doc.line(10, 22, 200, 22);

  //texto del reclamo
  doc.text(80, 40, "Datos Personales");

  doc.text(12, 60, "Nombre: ");
  doc.setFont("courier", "normal");
  doc.text(36, 60, nombreConfirm.innerText); //reemplazar

  doc.setFont("helvetica", "normal");
  doc.text(12, 75, "e-mail:");
  doc.setFont("courier", "normal");
  doc.text(31, 75, emailConfirm.innerText); //reemplazar

  doc.setFont("helvetica", "normal");
  doc.text(76, 100, "Detalles del problema");

  doc.text(12, 120, "Componente:");
  doc.setFont("courier", "normal");
  doc.text(48, 120, componenteConfirm.innerText); //reemplazar

  doc.setFont("helvetica", "normal");
  doc.text("Descripcion del Problema", 12, 135);

  doc.setFont("courier", "normal");

  //todo re ver este codigo

  //?codigo para que el texto largo rompa en el pdf

  //el numero despues de innerText marca el tamaño de cada linea
  textLines = doc.splitTextToSize(problemaConfirm.innerText, 200);
  //posicion en el eje y que arranca el texto
  let posicionY = 150;
  //doc.text(x,y,texto)
  doc.text(10, posicionY + 12 / 72, textLines);
  posicionY += textLines.length;

  //todo falta armar el formato del pie de la hoja de nuestro pdf

  doc.save("Su reclamo.pdf");
}
generarPDF.addEventListener("click", generandoPDF);

//todo hacer validacion del formulacio de reclamo
