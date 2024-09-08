(function(){
    emailjs.init("BzrVuHHeKfaSYS59g");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_kod069f', 'template_zg2ikoq', this)
        .then(function() {
            alert('Mensaje enviado correctamente.');
            document.getElementById('contact-form').reset(); // Limpia los campos del formulario
        }, function(error) {
            alert('Fallo al enviar el mensaje: ' + error);
        });
});
