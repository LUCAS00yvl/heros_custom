// Slideshow automático do Hero
let slideIndex = 0;

// Espera o DOM (HTML) carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // 1. Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 2. Avança o índice
  slideIndex++;

  // 3. Volta para o primeiro slide se chegar ao fim
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }

  // 4. Remove a classe "active" de todas as bolinhas
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // 5. Mostra o slide atual e marca a bolinha como ativa
  // Adiciona verificação para evitar erro se o slide não existir
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // 6. Define o tempo para a próxima troca (4 segundos)
  setTimeout(showSlides, 4000); // Mudei de 2000ms para 4000ms (4s)
}