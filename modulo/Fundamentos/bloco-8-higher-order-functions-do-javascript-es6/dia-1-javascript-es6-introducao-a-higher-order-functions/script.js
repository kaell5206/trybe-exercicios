// EXER 1
// const newEmployees = (newObj) => {
//   const employees = {
//     id1: newObj('Kaell Caldeira'),
//     id2: newObj('Clara Medeiros'),
//     id3: newObj('Fernando Bissi'),
//   }
//   return employees;
// };

// const newObj = (fullName) => {
//   const obj = {nomeCompleto: fullName, email: `${fullName.split(' ').join('_').toLowerCase()}@trybe.com`,}
//   return obj;
// }
// console.log(newEmployees(newObj))
const sortear = (numero, func) => {
  let sorteado = Math.round(Math.random() * (5 - 1) + 1);
  let result = func(numero, sorteado);
  return result;
}

const compara = (numero, resultado) => {
  if (resultado === numero) {
    return `Você ganhou, você escolheu ${numero} e o sorteado é ${resultado}`
  } else {
    return `Tente novamente. o numero era ${resultado} e você escolheu ${numero}`
  }
}


console.log(sortear(3, compara));
