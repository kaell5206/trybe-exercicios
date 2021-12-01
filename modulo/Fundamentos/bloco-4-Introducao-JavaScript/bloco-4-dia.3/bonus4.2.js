// em ordem crescente:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < numbers.length; index += 1){
//     for(let indexSecond = 0; indexSecond < index; indexSecond += 1){
//         if (numbers[index] < numbers[indexSecond]){
//             let position = numbers[index];
//             numbers[index] = numbers[indexSecond];
//             numbers[indexSecond] = position;
//         }
//     }
// }
// console.log(numbers)

// em ordem decrescente:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 1; index < numbers.length; index += 1){
//     for(let indexSecond = 0; indexSecond < index; indexSecond += 1){
//         if (numbers[index] > numbers[indexSecond]){
//             let position = numbers[index];
//             numbers[index] = numbers[indexSecond];
//             numbers[indexSecond] = position;
//         }
//     }
// }
// console.log(numbers)

// Multiplicar pelo proximo numero do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let novoArray = []
for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
    novoArray.push(numbers[i] * numbers[i + 1]) 
    } else {
        novoArray.push(numbers[i] * 2)
    }
}
    console.log(novoArray)