const form = document.querySelector('#form');
const selec = document.querySelector('#estado');

const estados = ['Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']

function adicionaEstados() {
  const select = document.querySelector('#estado');
  select.innerHTML = '';
  let valor = 0;
  for (let i = 0; i < estados.length; i+=1) {
    valor += 1;
    const option = document.createElement('option');
    option.innerHTML = option.innerText = estados[i]
    option.setAttribute('value', JSON.stringify(valor));
    select.appendChild(option)
  }
}
adicionaEstados()

function data() {
  if (date.value !== '') {
    const date = document.querySelector('#date')
    let dia = date.value[0]+date.value[1];
    let mes = date.value[2]+date.value[3];
    let ano = date.value[4]+date.value[5]+date.value[6]+date.value[7] 
    let padrao = `${dia}/${mes}/${ano}`
    if (dia < 0 || dia < 31 || mes < 0 || mes > 12 || ano < 0 ) {
      alert('Erro no formato de data')
      date.value = '';
    }
    else {
      date.value = padrao;
    }
  }
} 

date.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    data()
  }
});

function prevent() {
  form.preventDefault()
}
