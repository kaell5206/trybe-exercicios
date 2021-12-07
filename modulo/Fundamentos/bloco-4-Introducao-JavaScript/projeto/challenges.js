// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base , height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  resultado = string.split(' ');
  return resultado;
}
// Desafio 4
function concatName(array) {
  // seu código aqui
  let cocat = '';
    cocat =  array[array.length - 1]+', ' + array[0];
    return cocat
  }
// Desafio 5
// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  // seu código aqui
  wiPoint = wins * 3;
  sum = wiPoint + ties;
  return sum;
}
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0]
  let  cont = 0;
  for (let index = 0; index < array.length; index+=1) {
      if (array[index] > maior) {
        maior = array[index];
      }
    }
    for (index = 0; index < array.length; index+=1)
      if (array[index] === maior) {
          cont = cont + 1;
   }
   return cont;
} 
// Desafio 7

function catAndMouse(mouse, cat1 , cat2) {
  // seu código aqui
  let distanciaGato1= 0;
  let distanciaGato2 = 0;
  let resultado;
  if (mouse < cat1) {
    distanciaGato1 = mouse - cat1
  } else {
    distanciaGato1 = cat1 - mouse
  }
  if (mouse < cat2) {
    distanciaGato2 = mouse - cat2
  }  else {
    distanciaGato2 = cat2 - mouse
  }
  if (distanciaGato1 > distanciaGato2) {
    resultado = 'cat1'
  } else if (distanciaGato1 === distanciaGato2) {
    resultado = 'os gatos trombam e o rato foge'
  } else {
    resultado = 'cat2'
  }
return resultado
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let valor = [];
  for (let index = 0; index < array.length; index += 1)
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      array[index] = 'fizz';
      valor.push(array[index]);
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      array[index] = 'buzz';
      valor.push(array[index]);
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
      valor.push(array[index]);
    } else {
      array[index] = 'bug!';
      valor.push(array[index])
    }
return valor
}


// Desafio 9
function encode(string) {
  let separador = [];
  let resultado = '';
  for (let index = 0; index < 1; index +=1) {
    separador = string.split('');
  
  }
  for (index = 0; index < separador.length; index+=1) {
    if (separador[index] === 'a') {
      separador[index] = 1;
    } else if (separador[index] === 'e') {
      separador[index] = 2;
    } else if (separador[index] === 'i') {
      separador[index] = 3;
    } else if (separador[index] === 'o') {
      separador[index] = 4;
    } else if (separador[index] === 'u') {
      separador[index] = 5;
    }
    resultado = separador.join('')
  }

  // seu código aqui
return resultado
}

function decode(string) {
  // seu código aqui
  let separador = [];
  let resultado = '';
  for (let index = 0; index < 1; index +=1) {
    separador = string.split('')
  
  }
  for (index = 0; index < separador.length; index+=1) {
    if (separador[index] === '1') {
      separador[index] = 'a';
    } else if (separador[index] === '2') {
      separador[index] = 'e';
    } else if (separador[index] === '3') {
      separador[index] = 'i';
    } else if (separador[index] === '4') {
      separador[index] = 'o';
    } else if (separador[index] === '5') {
      separador[index] = 'u';
    }
    resultado = separador.join('')
  }

  // seu código aqui
return resultado
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
