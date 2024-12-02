const sections = document.querySelectorAll(".section");

function handleScrollAnimations() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.5;

    // Adiciona a classe "active" quando a seção entra na tela
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);

// Garante que o conteúdo da primeira seção seja visível ao carregar a página
window.addEventListener("load", handleScrollAnimations);

// Script para alertar sobre o pré-registro
document
  .getElementById("pre-register-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o link de ser aberto
    alert("O pré-registro começa somente no dia 05 de dezembro!");
  });

// Script para o slider de imagens
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Opção de passar o slide automaticamente após 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 5000);

// Funcionalidade do accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Seleciona o formulário pelo ID
const form = document.getElementById("contact-form");

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", function (event) {
  // Impede o envio padrão do formulário (para não recarregar a página)
  event.preventDefault();

  // Exibe o alerta
  alert("Formulário enviado com sucesso!");

  // Se você quiser limpar os campos após o envio, pode fazer:
  form.reset();
});
