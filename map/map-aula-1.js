const nome = ["Cleslley", "Frois", "Breder"];

// Map sempre são usados em array;

nome.map((nombre, idx) => {
    console.log("||||||||||||", nombre, idx)
})

// nome.map((valuesFromArray, Index))


// ex1

const array = [
    {
      id: 1,
      nome: "João",
      idade: 25
    },
    {
      id: 2,
      nome: "Maria",
      idade: 30
    },
    {
      id: 3,
      nome: "Carlos",
      idade: 28
    }
  ];

array.map((item, idx) => {
    console.log(item.nome, item.idade, idx);
    // item.'' retorna o item de dentro do objeto que você deseja.
})

// ex2

const produtos = [
    { id: 1, nome: "Notebook", preco: 2500 },
    { id: 2, nome: "Smartphone", preco: 1500 },
    { id: 3, nome: "Tablet", preco: 1200 }
  ];

produtos.map((item, idx) => {
    console.log(item.nome.toUpperCase())
})

// ex3

const usuarios = [
    "Alice",
    "Carlos",
    "Rafaela"
]

usuarios.map((nomes) => {
    console.log(nome.toUpperCase())
})

