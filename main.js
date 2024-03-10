document.addEventListener("DOMContentLoaded", function () {
    // Mostrar la diapositiva de Tanya al cargar la página
    showSlide("testimonial1");
  
    // Obtener los elementos de navegación
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
  
    // Agregar event listeners a los botones de navegación
    prevButton.addEventListener("click", function () {
      showSlide("testimonial1");
    });
  
    nextButton.addEventListener("click", function () {
      showSlide("testimonial2");
    });
  });
  
  function showSlide(slideId) {
    // Ocultar todas las diapositivas
    var slides = document.querySelectorAll(".testimonial");
    slides.forEach(function (slide) {
      slide.style.display = "none";
    });
  
    // Mostrar la diapositiva específica
    var currentSlide = document.getElementById(slideId);
    if (currentSlide) {
      currentSlide.style.display = "block";
    }
  }
  
  