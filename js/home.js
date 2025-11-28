//Funcion para abrir y cerrar nav
const button = document.querySelector('.headerMobile__nav-button');
const menu = document.querySelector('.headerMobile__nav-menu');

button.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});


//Funcion para abrir y cerrar seccion preguntas frecuentes

const questions = document.querySelectorAll('.faq__question');


questions.forEach(question => {
    question.addEventListener('click', function() {
        

        const item = this.closest('.faq__item');
        

        const estabaAbierto = item.classList.contains('faq__item--active');


        document.querySelectorAll('.faq__item').forEach(i => {
            i.classList.remove('faq__item--active');
        });

        if (!estabaAbierto) {
            item.classList.add('faq__item--active');
        }
    });
});