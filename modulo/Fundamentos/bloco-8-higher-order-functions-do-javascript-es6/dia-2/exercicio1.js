const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Adicione o código do exercício aqui:
// function authorBornIn1947(obj) {
//   // escreva aqui o seu código
//   let found = obj.find(element => element.author.birthYear === 1947)

//   return found.author.name;
// }
// console.log(authorBornIn1947(books))

// function smallerName() {
//   let nameBook = books[0].name ;
//   // escreva aqui o seu código
//   books.forEach((bora) => bora.name.length < nameBook.length ? nameBook = bora.name : false)
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }
// console.log(smallerName())

// function getNamedBook() {
//   // escreva seu código aqui
//   return books.find((livro) => {  return livro.name.length === 26 } )
  
// }
// console.log(getNamedBook())

// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//  return books.sort((a, b) => b.releaseYear - a.releaseYear) 
// }
// console.log(booksOrderedByReleaseYearDesc())

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((person) => person.birthYear > 1901 && person.birthYear <= 2000);
// }
// console.log(everyoneWasBornOnSecXX())

// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((livro) => livro.releaseYear > 1980 && livro.releaseYear <= 1989)
// }
// console.log(someBookWasReleaseOnThe80s())