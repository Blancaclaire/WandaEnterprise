
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.nav-toggle'); 
    const navMenu = document.querySelector('.nav-list');   

    // Escuchamos el evento click
    btnMenu.addEventListener('click', () => {
        // Alternamos (añadir/quitar) la clase 'active'
        navMenu.classList.toggle('active');
        
        // Opcional: Cambiar el icono o animar las líneas si quieres luego
        btnMenu.classList.toggle('open'); 
    });
});

//Funcion para abrir y cerrar seccion preguntas frecuentes

const questions = document.querySelectorAll(".faq__question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const item = this.closest(".faq__item");

    const estabaAbierto = item.classList.contains("faq__item--active");

    document.querySelectorAll(".faq__item").forEach((i) => {
      i.classList.remove("faq__item--active");
    });

    if (!estabaAbierto) {
      item.classList.add("faq__item--active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".features__card");
  const dots = document.querySelectorAll(".features__dot");
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  window.currentSlide = function (index) {
    showSlide(index);
  };

  window.nextSlide = function () {
    showSlide(currentIndex + 1);
  };

  window.prevSlide = function () {
    showSlide(currentIndex - 1);
  };
});
