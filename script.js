let pontos = {
  daniel: 0,
  esposa: 0
};

function carregarPontos() {
  const salvo = localStorage.getItem('pontos');
  if (salvo) {
    pontos = JSON.parse(salvo);
  }
  atualizarTela();
}

function salvarPontos() {
  localStorage.setItem('pontos', JSON.stringify(pontos));
}

function addPoints(user, valor) {
  pontos[user] += valor;
  salvarPontos();
  atualizarTela();
}

function atualizarTela() {
  document.getElementById('score-daniel').textContent = pontos.daniel;
  document.getElementById('score-esposa').textContent = pontos.esposa;
}

carregarPontos();
