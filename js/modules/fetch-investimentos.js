import AnimaNumeros from "./anima-numeros.js";

export default function fetchInvestimentos(url, target) {
  // Criando o HTML dinamicamente
  function createInvestimento(investimento) {
    const div = document.createElement("div");
    div.classList.add("numero-investimento");
    div.innerHTML = `
      <h3>${investimento.nome}</h3>
      <span data-numero>${investimento.total}</span>
    `;
    return div;
  }

  // Preenche cada investimento no DOM
  const numerosGrid = document.querySelector(target);
  function preencherInvestimentos(investimento) {
    const divInvestimento = createInvestimento(investimento);
    numerosGrid.appendChild(divInvestimento);
  }

  // Anima os números de cada investimento
  function animaInvestimentosNumeros() {
    // Iniciar a animação depois que o fetch acontecer
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Obtem os investimentos através de um arquivo json
  async function criarInvestimentos() {
    try {
      // Fetch, espera resposta e transforma resposta em JSON
      const investimentosResponse = await fetch(url);
      const investimentosJSON = await investimentosResponse.json();

      // Percorrendo Array de Objetos com 6 itens/6 objetos
      investimentosJSON.forEach((investimento) =>
        preencherInvestimentos(investimento)
      );

      animaInvestimentosNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarInvestimentos();
}
