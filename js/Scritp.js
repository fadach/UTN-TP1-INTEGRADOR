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
  var pdf = new jsPDF();
  pdf.setFontSize(16);

  pdf.text(-70, 10, aPdf.textContent);
  pdf.save("Su reclamo.pdf");
  // Todo seguir con este codigo para darle formato al texto que figura en el pdf
}
generarPDF.addEventListener("click", generandoPDF);
