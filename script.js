// Interactividad básica para el botón
document.addEventListener('DOMContentLoaded', function() {
    // Botón interactivo
    const boton = document.getElementById('boton-interactivo');
    const mensaje = document.getElementById('mensaje');
    let clicks = 0;

    if (boton) {
        boton.addEventListener('click', function() {
            clicks++;
            mensaje.textContent = `¡Has hecho clic ${clicks} ${clicks === 1 ? 'vez' : 'veces'}!`;
        });
    }

    // Formulario de contacto
    const formulario = document.getElementById('formulario-contacto');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensajeForm = document.getElementById('mensaje-form').value;
            
            // Mostrar alerta con los datos (en un caso real, se enviarían a un servidor)
            alert(`Gracias por tu mensaje, ${nombre}!\n\nEmail: ${email}\nMensaje: ${mensajeForm}\n\n(Nota: Este es un formulario de ejemplo que no envía datos realmente)`);
            
            // Limpiar el formulario
            formulario.reset();
        });
    }

    // Navegación suave
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
