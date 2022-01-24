// Quantas pessoas votaram?
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
  ];

function totalVotes(arr) {
  // Your code here
  return arr.reduce((acc, curr) => curr.voted === true ? acc += 1: acc , 0)
}
  
 
  
  console.log(totalVotes(voters)); // 7 


  // Quanto custaria para comprar todos os itens de uma vez?

// function shoppingSpree(arr) {
//   // Your code here
//   }
  
//   const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
//   ];
  
//   console.log(shoppingSpree(wishlist)); // 227005 


/**
* Dado um array de votantes em potencial,
* retorne um objeto com as seguintes chaves:
* youngPeople: numero total de pessoas com idade entre 18 e 25
* youngVotes: numero total de pessoas nessa faixa que votou
* midPeople: numero total de pessoas com idade entre 26 e 55
* midVotes: numero total de pessoas nessa faixa que votou
* oldPeople: numero total de pessoas com mais de 55 anos
* oldVotes: numero total de pessoas nessa faixa que votou
*/

// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:65, voted:true},
//   {name:'Tami' , age: 64, voted:true},
//   {name: 'Mary', age: 41, voted: false},
//   {name: 'Becky', age: 53, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
//   ];
  
//   function voterResults(arr) {
//   // Your code here
//   }
  
//   console.log()