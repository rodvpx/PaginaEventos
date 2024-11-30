const sections = document.querySelectorAll(".section");

function handleScrollAnimations() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.5; // Ajuste da altura da tela

    // Adiciona a classe "active" para a transição de opacidade
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimations);
