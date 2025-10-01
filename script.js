// Este proyecto no requiere JavaScript
// El archivo está incluido por si necesitas agregar funcionalidad en el futuro

// Ejemplo de código que podrías agregar:

// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});