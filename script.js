function jogar() {
  rodada = 1
  while (rodada <= 3) {
    console.log("Rodada: " + rodada)
    
    escolhaJogador = prompt("Nível " + rodada + " escolha uma caixa: 1, 2 ou 3?");
    caixaComJaca = Math.floor(Math.random() * 3) + 1;
    
    if (escolhaJogador < 1 || escolhaJogador > 3) {
      alert("Escolha inválida, jogo encerrado! Inicie novamente.");
      rodada = 1000
    } else if (caixaComJaca == escolhaJogador) { 
      alert("Enfiou o pé na Jaca que estava na caixa: " + caixaComJaca + "! O jogo acabou para você!")
      rodada = 1000
    } else {
      alert("Ufa! Não tinha Jaca... passou de Nível! A Jaca estava na caixa " + caixaComJaca + "!")
    }
    
    rodada = rodada + 1  
  }
  
  if (rodada == 4) {
    alert("Você venceu! Parabéns!!!")
  }
}