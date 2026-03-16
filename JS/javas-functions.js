window.onload = function() 
// Seleccionamos el botón y el banner
{
    const botonCerrar = document.querySelector('.closebutton');
    const banner = document.getElementById('cookieBanner');

// Añadimos el evento de clic
    botonCerrar.onclick = function() {
        banner.style.display = 'none';
    };
};