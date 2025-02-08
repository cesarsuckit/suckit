document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-gallery img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert("¡Has hecho clic en una imagen!");
            // Aquí puedes agregar más interactividad como mostrar una imagen más grande.
        });
    });
});
