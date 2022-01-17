const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//  parte 3 exercicio 1
const adiciona = (chave, objeto, valor) => {
  chave; valor; objeto[chave] = valor;
  return objeto;
}
console.log(adiciona('turno', lesson2, 'noite'))
// parte 3 exercicios 2
// const showKeys = (objeto) => {
//   Object.keys(objeto);
//   return objeto;
// }
// console.log(showKeys(lesson2))
//  parte 3 exercicio 3
// const LengthObj = (objeto) => {
//   return Object.keys(objeto).length;
// }
// console.log(LengthObj(lesson1))
// // parte 3 exercicio 4
// const valuesObj = (objeto) => {
//   return Object.values(objeto);
// }
// console.log(valuesObj(lesson1))
// parte 3 exercicio 5
const  allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)
// parte 3 exercicio 6
const estudante = (objeto) => {
  // let string = `Numero total de estudantes é : ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`
  // return string
  let total =0;
  let keys = Object.keys(objeto)
  for (index in keys) {
    total += objeto[keys[index]].numeroEstudantes;
  }
  return total;
}
console.log(estudante(allLessons))
// parte 3 exercicio 7
const valorChave = (objeto , indice) => {
 let valores = Object.values(objeto)

 return valores[indice];
}
console.log(valorChave(lesson1, 0))
// parte 3 exercicio 8 
const paresObjeto = (objeto , chave, valor) => {
  let pares = Object.entries(objeto);
  pares
 
  
 }
 console.log(paresObjeto(lesson1, ))