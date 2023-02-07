const frases = [
  "Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.  -  William Shakespare",
  "Este CD-ROM pode conter mais informação do que todo estes papéis abaixo de mim - Bill Gates, 1994",
  "A pior coisa que eu posso ser é igual a todo mundo. Eu odeio isso. - Arnold Schwarzenegger",
  "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir. - Steve Jobs ",
  "A História é um conjunto de mentiras sobre as quais se chegou a um acordo. - Napoleão Bonaparte ",
  "Ações não valem menos por não serem elogiadas. - Aragorn (Senhor dos anéis)",
  "Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ",
  "Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon",
  "Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney",
  "Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein",
];

const fundo = [
  "http://www.designbolts.com/wp-content/uploads/2014/03/Marron-Mixed-High-resolution-blurr-background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Light-HD-Background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Multi-color-blur-background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Light-Blue-blur-background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Yellow-blur-background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Bright-Blue1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Purple-Blur-Background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Blue-Blur-Background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/Sea-green-blur-background1.jpg",
  "http://www.designbolts.com/wp-content/uploads/2014/03/best-blurred-background-wallpaper1.jpg",
];

function novafrase() {
  //Muda a frase sempre que a função é chamada
  const aleatorio = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").innerHTML = frases[aleatorio];

  //muda a imagem do background sempre que a função é chamada
  const i = Math.floor(Math.random() * fundo.length);
  document.body.style.backgroundImage = "url('" + fundo[i] + "')";
}
