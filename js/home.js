document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-list");

  // Escuchamos el evento click
  btnMenu.addEventListener("click", () => {
    // Alternamos (añadir/quitar) la clase 'active'
    navMenu.classList.toggle("active");

    // Opcional: Cambiar el icono o animar las líneas si quieres luego
    btnMenu.classList.toggle("open");
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

// Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas las tarjetas del slider
  const slides = document.querySelectorAll(".features__card");

  // Selecciona todos los puntos indicadores del slider
  const dots = document.querySelectorAll(".features__dot");

  // Índice que indica qué slide está activo actualmente
  let currentIndex = 0;

  // Función que muestra un slide según el índice recibido
  function showSlide(index) {
    // Si el índice se pasa del último slide, vuelve al primero
    if (index >= slides.length) {
      currentIndex = 0;

      // Si el índice es menor que 0, va al último slide
    } else if (index < 0) {
      currentIndex = slides.length - 1;

      // Si está dentro de rangos, simplemente actualiza el índice
    } else {
      currentIndex = index;
    }

    // Quita la clase "active" de todos los slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Quita la clase "active" de todos los puntos
    dots.forEach((dot) => dot.classList.remove("active"));

    // Activa solo el slide actual
    slides[currentIndex].classList.add("active");

    // Activa el punto correspondiente al slide actual
    dots[currentIndex].classList.add("active");
  }

  // Permite cambiar a un slide específico desde el HTML
  window.currentSlide = function (index) {
    showSlide(index);
  };

  // Cambia al siguiente slide
  window.nextSlide = function () {
    showSlide(currentIndex + 1);
  };

  // Cambia al slide anterior
  window.prevSlide = function () {
    showSlide(currentIndex - 1);
  };
});



//Funcion de visualización password
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password-input');
    const toggleButton = document.getElementById('toggle-password');
    const eyeIcon = document.getElementById('eye-icon');

    // Iconos en formato SVG para reutilizar
    const eyeOpen = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    `;
    const eyeSlashed = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    `;

    // 1. Lógica al hacer clic en el botón
    toggleButton.addEventListener('click', function () {
        // VALIDACIÓN: Si el input está vacío, no hace nada
        if (passwordInput.value.trim() === "") {
            return; 
        }

        const isPassword = passwordInput.getAttribute('type') === 'password';
        
        if (isPassword) {
            passwordInput.setAttribute('type', 'text');
            eyeIcon.innerHTML = eyeSlashed;
        } else {
            passwordInput.setAttribute('type', 'password');
            eyeIcon.innerHTML = eyeOpen;
        }
    });

    // 2. Lógica para restablecer el icono si el usuario borra el contenido
    passwordInput.addEventListener('input', function () {
        if (this.value.trim() === "") {
            passwordInput.setAttribute('type', 'password');
            eyeIcon.innerHTML = eyeOpen;
        }
    });
});