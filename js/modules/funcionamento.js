export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number); // Transforma string em Array [1,2,3,4,5]
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number); // Transforma string em Array [8,18]
  }

  dadosAgora() {
    this.agora = new Date();
    this.dia = this.agora.getDay();
    this.hora = this.agora.getUTCHours() - 3;
  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.dia) != -1; //true
    this.horarioAberto =
      this.hora >= this.horarioSemana[0] && this.hora < this.horarioSemana[1]; //true
    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
