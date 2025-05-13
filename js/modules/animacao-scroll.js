export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowMetade;

        if (sectionTop < 0) {
          item.classList.add("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}
