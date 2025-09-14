const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

/*--Historia----*/
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrusel img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Botones
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    // Automático cada 5 segundos
    setInterval(nextImage, 5000);
});



/*------*/

const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita que recargue la página

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || email === "" || mensaje === ""){
        respuesta.style.color = "red";
        respuesta.textContent = "⚠️ Por favor completa todos los campos.";
        return;
    }

    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        respuesta.style.color = "red";
        respuesta.textContent = "⚠️ Ingresa un correo válido.";
        return;
    }

    // Si todo está correcto
    respuesta.style.color = "lightgreen";
    respuesta.textContent = `✅ Gracias ${nombre}, tu mensaje fue enviado correctamente. Pronto Mafer Karina Reyes se pondrá en contacto contigo.`;

    form.reset(); // limpiar formulario
});
