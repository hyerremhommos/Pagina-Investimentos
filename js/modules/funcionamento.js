export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number); //Transforma string em Array [1,2,3,4,5]
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number); //Transforma string em Array [8,18]

  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours();

  const semanaAberto = diasSemana.indexOf(dia) != -1; //true
  const horarioAberto = hora >= horarioSemana[0] && hora < horarioSemana[1]; //true

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
