function rollD4() {
  const result = Math.floor(Math.random() * 4) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

  let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d4)`;
      } else {
        historicoElement.textContent += `, ${result}(d4)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function rollD6() {
  const result = Math.floor(Math.random() * 6) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

  let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d6)`;
      } else {
        historicoElement.textContent += `, ${result}(d6)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function rollD8() {
  const result = Math.floor(Math.random() * 8) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

  let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d8)`;
      } else {
        historicoElement.textContent += `, ${result}(d8)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function rollD10() {
  const result = Math.floor(Math.random() * 10) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

 let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d10)`;
      } else {
        historicoElement.textContent += `, ${result}(d10)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function rollD12() {
  const result = Math.floor(Math.random() * 12) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

  let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d12)`;
      } else {
        historicoElement.textContent += `, ${result}(d12)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function rollD20() {
  const result = Math.floor(Math.random() * 20) + 1;
  const resultadoElement = document.getElementById("resultado");
  const historicoElement = document.getElementById("historico");

  let contador = 0;
  const intervaloID = setInterval(function () {
    document.getElementById("diceModel").classList.add("rolling");
    contador++;
    console.log("Contador: " + contador);
    
    if (contador == 3) {
      // Atualiza o resultado
      resultadoElement.textContent = `${result}`;
      document.getElementById("diceModel").classList.remove("rolling");

      // Atualiza o histórico
      const historicoAtual = historicoElement.textContent;
      if (historicoAtual.includes("nenhum")) {
        historicoElement.textContent = `Histórico: ${result}(d20)`;
      } else {
        historicoElement.textContent += `, ${result}(d20)`;
      }
      clearInterval(intervaloID);
      console.log("Contagem concluída!");
    }
  }, 1000);
}

function clsHist() {
  const historico = document.getElementById("historico");
  historico.textContent = "Histórico: nenhum ainda";
}
