// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers[0];
// for (let i = 0; i < numbers.length; i+= 1) {
//     if (numbers[i] > maior) {
//         maior = numbers[i]
//     }
// }
// console.log(`o maior numero do array é : ${maior}`)

// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];
function highestCount(array) {
  // seu código aqui
  let maior = array[0]
  let  cont = []
  for (let index = 0; index < array.length; index+=1) {
      if (array[index] > maior) {
        maior = array[index];
      }
        for (index = 0; index < array.length; index+=1)
        if (array[index] === maior) {
            cont.push(maior)
            return cont;
        }
      

      }
   
    }
  
  
console.log(highestCount(numbers))