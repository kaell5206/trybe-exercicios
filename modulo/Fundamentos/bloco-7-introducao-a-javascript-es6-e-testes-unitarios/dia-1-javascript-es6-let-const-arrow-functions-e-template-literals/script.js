// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);
// exer 1
const esc = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  const ifTest = (escopo === true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(`${ifScope} Não devo ser utilizada fora meu escopo (else)`);
}
esc(false)

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function bubble(oddsAndEvens) {
  for (let i = 1; i < oddsAndEvens.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (oddsAndEvens[i] < oddsAndEvens[j]) {
        let position = oddsAndEvens[j]
        oddsAndEvens[j] = oddsAndEvens[i];
        oddsAndEvens[i] = position; 
      }
    }
  }
  return oddsAndEvens
}
console.log(bubble(oddsAndEvens))
 

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a,b) => a - b)
  console.log(oddsAndEvens)

const fatorial = (Number) => {
  let resultado = Number;
  for (let i = 1; i < Number; i += 1) {
    resultado *= i
  }
  return resultado
}
console.log(fatorial(6))

const longWord = (frase) => {
  let splitString = frase.split(' ');
  for (let i = 1; i < splitString.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (splitString[i].length > splitString[j].length) {
        let position = splitString[j]
        splitString[j] = splitString[i];
        splitString[i] = position;
      }
    }
  }

  return splitString[0]
}
console.log(longWord('Antônio foi no banheiro e não paralalelelelelepipepepepdododoxdodododo sabemos o que aconteceu'))


const troca = (string) => {
  let newString = string.replace("x", "bebeto");
  return newString;
}
console.log(troca('Tryber x aqui!'))

let stringTest = "Tryber x aqui!"

const skills = ['HTML', 'CSS','JavaScript','DOM','Logica'];
const stringC = (string) => {
  let sortSKill = skills.sort();
  let newString =  `${string} Minhas cinco principais habilidades são: ${sortSKill[0]}, ${sortSKill[1]}, ${sortSKill[2]}, ${sortSKill[3]},${sortSKill[4]}`;

  return newString;
}
console.log(stringC(stringTest))
//  parte 2


