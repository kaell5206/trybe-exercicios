//Exercicio 1 Palindromo 
// function verificarPalindromo(string){
//     // console.log(string.split('').reverse().join(''))
//     let space = '';
//     for (let i = string.length - 1; i>= 0; i-= 1) {
//         space += string[i];
//     } if (space === string) {
//         console.log(string+" é um palindromo.");
//     } else {
//         console.log(string+" Não é um palindromo.");
//     }

// }
// return verificarPalindromo('arara');

//Exercicio 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];
let maiorValor = 0;
function maiorValorDoIndice(array) {
    for (key in array) {
        maiorValor = key;
    }
        
}
return maiorValor
