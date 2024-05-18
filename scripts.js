document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario de contacto
    const form = document.querySelector('form');
    
    // Agregar un evento de envío al formulario
    form.addEventListener('submit', function(event) {
        // Validación del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Verificar que los campos no estén vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
            event.preventDefault(); // Prevenir el envío del formulario
        } else {
            // Validar el formato del email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, ingrese un correo electrónico válido.");
                event.preventDefault();
            }
        }
    });

    // Añadir una animación de desplazamiento suave para los enlaces del menú
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
