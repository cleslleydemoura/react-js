const nome = ["Cleslley", "Frois", "Breder"];

// Map sempre são usados em array;

nome.map((nombre, idx) => {
  console.log("||||||||||||", nombre, idx);
});

// nome.map((valuesFromArray, Index))

// ex1

const array = [
  {
    id: 1,
    nome: "João",
    idade: 25,
  },
  {
    id: 2,
    nome: "Maria",
    idade: 30,
  },
  {
    id: 3,
    nome: "Carlos",
    idade: 28,
  },
];

array.map((item, idx) => {
  console.log(item.nome, item.idade, idx);
  // item.'' retorna o item de dentro do objeto que você deseja.
});

// ex2

const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Smartphone", preco: 1500 },
  { id: 3, nome: "Tablet", preco: 1200 },
];

produtos.map((item, idx) => {
  console.log(item.nome.toUpperCase()); // Passando para Uppercase
});

// ex3

const usuarios = ["Alice", "Carlos", "Rafaela"];

usuarios.map((nomes) => {
  console.log(nome.toUpperCase());
});

// ex4

const livros = [
  {
    id: 1,
    nome: "Drácula",
  },
  {
    id: 2,
    nome: "Frankenstein",
  },
  {
    id: 3,
    nome: "Memórias Póstumas de Brás Cubas",
  },
];

livros.map((item, idx) => {
  console.log(item.nome.length);
});

// ex5

const games = [
  {
    id: 1,
    nome: "Dead by Daylight",
  },
  {
    id: 2,
    nome: "Hollow Knight",
  },
  {
    id: 3,
    nome: "Asphalt Legends",
  },
];

games.map((item, index) => {
  console.log(index, item.nome.toUpperCase());
});

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