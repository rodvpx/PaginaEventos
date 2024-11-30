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
