// Desafio 10
function techList(array, name) {
    // seu código aqui 
    let Objeto = {
      tech: array,
      name: name
    };
    let arrayObjeto = []
    let ordenador = Objeto.tech;
    for (let i = 0; i < ordenador.length; i += 1){
      let ordenador = Objeto.tech.sort()
      arrayObjeto.push(
        {
        tech: ordenador[i],
        name: name
        })
       }
       if (ordenador.length === 0){
        arrayObjeto = 'Vazio!'
    } 
  return arrayObjeto
}
// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let repe = 0;
  let resultado = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}` ;
  if (array.length !== 11) {
    resultado = "Array com tamanho incorreto.";
    return resultado
  }
  for (let index=1;index<array.length;index+=1){
    repe = 0
    for (let indexSecond=0;indexSecond<=index;indexSecond+=1){
      if (array[index] === array[indexSecond]){
        repe +=1
      }
    }
    if(array[index] < 0 || array[index] > 9 || repe >= 3) {
      resultado = "não é possível gerar um número de telefone com esses valores";
      return resultado
    }
  }
return resultado
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
}


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
