export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  numeros.forEach((numero) => {
    const total = Number(numero.innerText);
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;

      numero.innerText = start;

      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}
