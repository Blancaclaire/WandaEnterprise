//Funcion para abrir y cerrar nav
const button = document.querySelector(".headerMobile__nav-button");
const menu = document.querySelector(".headerMobile__nav-menu");

button.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
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
