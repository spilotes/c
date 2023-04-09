// Verifica se o contador já foi criado no localStorage
if (!localStorage.getItem("contador")) {
  localStorage.setItem("contador", 0);
}

// Incrementa o contador de acessos
let contador = parseInt(localStorage.getItem("contador")) + 1;
localStorage.setItem("contador", contador);

// Exibe o contador no console.log
console.log(`localStorage = ${contador}`);
