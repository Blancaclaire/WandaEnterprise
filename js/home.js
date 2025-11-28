const button = document.querySelector('.headerMobile__nav-button');
const menu = document.querySelector('.headerMobile__nav-menu');

button.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});


// Seleccionar todos los botones de pregunta
const faqQuestions = document.querySelectorAll('.faq__question');

// Función para cerrar todos los items
function closeAllItems() {
    const allItems = document.querySelectorAll('.faq__item');
    allItems.forEach(item => {
        item.classList.remove('faq__item--active');
        const button = item.querySelector('.faq__question');
        button.setAttribute('aria-expanded', 'false');
    });
}

// Función para toggle del item
function toggleItem(button) {
    const item = button.closest('.faq__item');
    const isActive = item.classList.contains('faq__item--active');
    
    // Cerrar todos los items
    closeAllItems();
    
    // Si el item no estaba activo, abrirlo
    if (!isActive) {
        item.classList.add('faq__item--active');
        button.setAttribute('aria-expanded', 'true');
    }
}

// Agregar event listeners a cada pregunta
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        toggleItem(this);
    });
    
    // Soporte para teclado (Enter y Espacio)
    question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleItem(this);
        }
    });
});
