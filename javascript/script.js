// Seleciona todas as seções com a classe "section"
const sections = document.querySelectorAll(".section");

// Função para adicionar animações ao rolar a página
function handleScrollAnimations() {
  sections.forEach((section) => {
    // Obtém a posição da seção em relação à tela
    const sectionTop = section.getBoundingClientRect().top;
    // Define o ponto de acionamento para a animação (1.5 vezes a altura da janela)
    const triggerPoint = window.innerHeight / 1.5;

    // Adiciona a classe "active" quando a seção entra na tela
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Chama a função toda vez que o usuário rolar a página
window.addEventListener("scroll", handleScrollAnimations);

// Garante que a animação da primeira seção seja ativada ao carregar a página
window.addEventListener("load", handleScrollAnimations);

// Script para alertar sobre o pré-registro
document
  .getElementById("pre-register-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede a ação padrão do link
    alert("O pré-registro começa somente no dia 05 de dezembro!"); // Exibe o alerta
  });

// Script para o slider de imagens
let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll(".slide"); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides

// Função para avançar o slide
document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
  updateSlider(); // Atualiza a posição do slider
});

// Função para voltar ao slide anterior
document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Volta para o slide anterior
  updateSlider(); // Atualiza a posição do slider
});

// Função para atualizar a posição do slider
function updateSlider() {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`; // Move o slider para o slide atual
}

// Opção de passar o slide automaticamente após 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides; // Avança automaticamente para o próximo slide
  updateSlider(); // Atualiza o slider
}, 5000);

// Funcionalidade do accordion para perguntas frequentes
const faqItems = document.querySelectorAll(".faq-item");

// Adiciona um ouvinte de evento para cada item do FAQ
faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("open"); // Alterna a classe "open" para abrir/fechar a resposta
  });
});

// Seleciona o formulário pelo ID
const form = document.getElementById("contact-form");

// Adiciona o evento de envio ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Exibe o alerta de sucesso
  alert("Formulário enviado com sucesso!");

  // Limpa os campos do formulário após o envio
  form.reset();
});

// JavaScript para abrir e fechar o menu hambúrguer
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// Adiciona o evento de clique no ícone do menu hambúrguer
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Alterna a classe 'active' para mostrar ou esconder o menu
});
