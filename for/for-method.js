// utilizando método for

// ex1

const jogos = ["Dead by Daylight", "Hollow Knight", "Asphalt Legends"];
const quadrados = [];

for (let jogo of jogos) {
  // definindo uma variável que recebe 'jogos'
  quadrados.push(jogo + " é um jogo bom."); // quadrados está puxando o conteúdo de jogos + ''
}

console.log(quadrados);

// ex2

const gaming = ["Dead by Daylight", "Hollow Knight", "Asphalt Legends"];
const mensagens = [];

// for (inicialização; condição; incremento/decremento)
for (let idx = 0; idx < gaming.length; idx++) {
  mensagens.push(gaming[idx] + " é um jogo bom.");
}

console.log(mensagens);

//ex3

const coisax = [
  {
    id: 1,
    nome: "Celular"
  },
  {
    id: 2,
    nome: "Notebook"
  },
  {
    id:3,
    nome: "Nintendo Switch"
  }
];

const dispositivo = [];

for (let i = 0; i < coisax.length; i++) {
  dispositivo.push(coisax[i].nome + " é um aparelho eletrônico.")
}

console.log(dispositivo); 