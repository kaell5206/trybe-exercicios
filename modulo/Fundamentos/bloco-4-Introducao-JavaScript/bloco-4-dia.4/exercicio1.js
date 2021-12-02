// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrent: 'yes',
//   };
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota:  'O último MacPatinhas',
//     recorrent: 'yes',
//   };
//   console.log(info.personagem+" "+"e "+info2.personagem)
//   console.log(info.origem + ' '+'e '+info2.origem)
//   console.log(info.nota+' '+'e '+info2.nota)
//   console.log(info.recorrent+' '+'e '+info2.recorrent)
  
//   for (key in info) {
//       console.log(info[key])
//   }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
    ],
  };
console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama "+leitor.livrosFavoritos[0].titulo)
console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" favoritos.")