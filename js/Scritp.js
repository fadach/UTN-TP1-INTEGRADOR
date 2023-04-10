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
  // si el id nombre tiene un valor valida a true el email
  if ($("#nombre").val()) {
    $("#email").prop("disabled", false);
  } else {
    $("#email").prop("disabled", true);
  }
}

function validateEmail() {
  // si el id email tiene un valor valida a true el boton siguiente
  if ($("#email").val()) {
    $("#btnSiguiente1").prop("disabled", false);
  } else {
    $("#btnSiguiente1").prop("disabled", true);
  }
}

function validateComponent() {
  //si el id componente tiene un valor valida a true el problema
  if ($("#componente").val()) {
    $("#problema").prop("disabled", false);
  } else {
    $("#problema").prop("disabled", true);
  }
}

function validateProblem() {
  // si el id problema tiene un valor valida a true el boton siguiente2
  if ($("#problema").val()) {
    $("#btnSiguiente2").prop("disabled", false);
  } else {
    $("#btnSiguiente2").prop("disabled", true);
  }
}

let expRegNombre = /^[A-Z][a-z]+((\s[A-Z][a-z]+)+)?$/;
let expRegEmail = /^[a-z._-]+[@][a-z]+(\.[a-z]+)+$/;

function showDetalleProblema() {
  if (
    !expRegNombre.test($("#nombre").val()) &&
    !expRegEmail.test($("#email").val())
  ) {
    //error del nombre
    $("#errNombre").text(
      'El nombre debe respetar el siguiente formato:"Juan Perez"'
    );
    //margen input nombre cuando tira error nombre
    $("#nombre").css("margin-bottom", "10px");

    //error correo
    $("#errEmail").text(
      'El correo debe respetar el siguiente formato:"usuario@dominio.com"'
    );
    //margen error correo
    $("#email").css("margin-bottom", "10px");
  } else if (!expRegNombre.test($("#nombre").val())) {
    //error nombre
    $("#errNombre").text(
      'El nombre debe respetar el siguiente formato:"Juan Perez"'
    );
    //margen input nombre cuando tira error nombre
    $("#nombre").css("margin-botton", "10px");

    //error email se vacia
    $("errEmail").text("");

    //margen input email vuelve a la normalidad
    $("#email").css("margin-bottom", "30px");
  } else if (!expRegEmail.test($("#email").val())) {
    //error Email
    $("#errEmail").text(
      'El correo debe respetar el siguiente formato:"usuario@dominio.com"'
    );

    //margen del input email cuando arroja error email
    $("#email").css("margin-bottom", "10px");

    //texto error nombre desaparece
    $("#errNombre").text("");

    //margen del input nombre vuelve a la normalidad
    $("#nombre").css("margin-bottom", "30px");
  } else {
    // si le hago click al siguiente me manda a la pestaña detalle del problema
    $("#tabMenu a[href='#detalle-problema']").tab("show");

    //el mensaje de error del nombre desaparece
    $("#errNombre").text("");

    //el margen del imput nombre vuelve a la normalidad
    $("#nombre").css("margin-bottom", "30px");

    //el mensaje de error del email desaparece
    $("#errEmail").text("");

    //el margen del input email vuelve a la normalidad
    $("#email").css("margin-bottom", "30px");
  }
}

function showConfirmacion() {
  // muestra los valores completados en el form
  $("#nombreConfirm").text($("#nombre").val());
  $("#emailConfirm").text($("#email").val());
  $("#componenteConfirm").text($("#componente").val());
  $("#problemaConfirm").text($("#problema").val());
  // si le haces click a su solapa confirmacion te la muestra
  $("#tabMenu a[href='#confirmacion']").tab("show");
}



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
  doc.text(36, 60, nombreConfirm.innerText);

  doc.setFont("helvetica", "normal");
  doc.text(12, 75, "e-mail:");
  doc.setFont("courier", "normal");
  doc.text(31, 75, emailConfirm.innerText);

  doc.setFont("helvetica", "normal");
  doc.text(76, 100, "Detalles del problema");

  doc.text(12, 120, "Componente:");
  doc.setFont("courier", "normal");
  doc.text(48, 120, componenteConfirm.innerText);

  doc.setFont("helvetica", "normal");
  doc.text("Descripcion del Problema", 12, 135);

  doc.setFont("courier", "normal");

  //?codigo para que la linea rompa en el pdf

  //el numero despues de innerText marca el tamaño de cada linea
  textLines = doc.splitTextToSize(problemaConfirm.innerText, 200);
  //posicion en el eje y que arranca el texto
  let posicionY = 150;
  //doc.text(x,y,texto)
  doc.text(10, posicionY + 12 / 72, textLines);
  posicionY += textLines.length;

  doc.setFont("helvetica", "normal");
  doc.line(10, 270, 200, 270);

  doc.setFontSize(12);
  doc.text(
    "Ante cualquier problema no dude en acercarse a nuestro local",
    50,
    280
  );
  doc.text("Constitucion 1090, San Fernando, Argentina", 65, 290);

  doc.save("Su reclamo.pdf");
}
generarPDF.addEventListener("click", generandoPDF);




/* Enviar Correo */

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_uzrd3pp';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        btn.value = 'Enviado';

      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  }); 
