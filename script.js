// Validación del formulario de contacto
$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    let nombre = $('#nombre').val().trim();
    let email = $('#email').val().trim();
    let mensaje = $('#mensaje').val().trim();
    let feedback = '';
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre.length < 2) {
      feedback = '<span style="color:#7F00FF">El nombre debe tener al menos 2 caracteres.</span>';
    } else if (!emailRegex.test(email)) {
      feedback = '<span style="color:#7F00FF">Ingresa un correo electrónico válido.</span>';
    } else if (mensaje.length < 5) {
      feedback = '<span style="color:#7F00FF">El mensaje debe tener al menos 5 caracteres.</span>';
    } else {
      feedback = '<span style="color:#64FFDA">¡Mensaje enviado correctamente!</span>';
      $('#contactForm')[0].reset();
    }
    $('#formFeedback').html(feedback);
  });
});

// Test de seguridad: validación y retroalimentación
$(document).ready(function() {
  $('#testForm').on('submit', function(e) {
    e.preventDefault();
    let correctas = 0;
    if ($('#q1').val() === 'correcto') correctas++;
    if ($('#q2').val() === 'correcto') correctas++;
    if ($('#q3').val() === 'correcto') correctas++;
    let feedback = '';
    if (correctas === 3) {
      feedback = '<span style="color:#64FFDA">¡Excelente! Has respondido correctamente todas las preguntas.</span>';
    } else if (correctas === 2) {
      feedback = '<span style="color:#7F00FF">¡Muy bien! Solo te faltó una respuesta correcta.</span>';
    } else {
      feedback = '<span style="color:#7F00FF">Te recomendamos repasar las buenas prácticas de seguridad.</span>';
    }
    $('#testFeedback').html(feedback);
  });
});

// Scroll suave al formulario de contacto
$(document).ready(function() {
  $("a[href='#contact']").on('click', function(e) {
    e.preventDefault();
    const target = $('#contact');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 700);
    }
  });
});
