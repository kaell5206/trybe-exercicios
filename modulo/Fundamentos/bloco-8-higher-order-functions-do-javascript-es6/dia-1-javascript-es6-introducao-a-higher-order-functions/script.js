// EXER 1
const newEmployees = (newObj) => {
  const employees = {
    id1: newObj('Kaell Caldeira'),
    id2: newObj('Clara Medeiros'),
    id3: newObj('Fernando Bissi'),
  }
  return employees;
};

const newObj = (fullName) => {
  const obj = {nomeCompleto: fullName, email: `${fullName.split(' ').join('_').toLowerCase()}@trybe.com`,}
  return obj;
}
console.log(newEmployees(newObj))
// EXER 2
const compara = (numero, resultado) => {
  if (numero === resultado) {
    return `Você ganhou, você escolheu ${numero} e o sorteado é ${resultado}`
  } else {
    return `Tente novamente. o numero era ${resultado} e você escolheu ${numero}`
  }
}

const sortear = (numero, func) => {
  let sorteado = Math.round(Math.random() * (5 - 1) + 1);
  let result = func(numero, sorteado);
  return result;
}



console.log(sortear(3, compara));

// EXER 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostas = (gabarito, respostas, func) => {
  let resultado = `Nota final do aluno ; ${func(gabarito, respostas)}`;
  
  return resultado;
}

const checarResposta = (array1,array2) => {
  let certas = 0;
  for (let i = 0; i < array1.length; i+=1) {
    if (array1[i] === array2[i] && array2[i] !== 'N.A') {
      certas += 1;
    }
    if (array1[i] !== array2[i] && array2[i] !== 'N.A') {
      certas -= 0.5
    }
  }
  return certas;
}

console.log(respostas(RIGHT_ANSWERS, STUDENT_ANSWERS, checarResposta))
