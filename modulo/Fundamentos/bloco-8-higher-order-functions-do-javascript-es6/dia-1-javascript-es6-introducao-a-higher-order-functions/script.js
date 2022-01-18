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
