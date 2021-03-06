const form = document.querySelector('#form');
const submit = document.querySelector('#submit')
const selec = document.querySelector('#estado');
const container = document.querySelector('.container')
const estados = ['Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const endereco = document.querySelector('#endereco')
const cidade = document.querySelector('#cidade')
const resumo = document.querySelector('#resumo')
const cargo = document.querySelector('#cargo')
const descricao = document.querySelector('#descricao')


function adicionaEstados() {
  const select = document.querySelector('#estado');
  select.innerHTML = '';
  let valor = 0;
  for (let i = 0; i < estados.length; i+=1) {
    valor += 1;
    const option = document.createElement('option');
    option.innerHTML = option.innerText = estados[i]
    option.setAttribute('value', estados[i]);
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
    if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0 ) {
      alert('Erro no formato de data')
      date.value = '';
    }
    else {
      date.value = padrao;
    }
  }
}

date.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    data()
  }
});

function prevent(event) {
  event.preventDefault()
  container.innerHTML = '';
  const tipo = document.querySelector('input[name="moradia"]:checked')
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');
  const div6 = document.createElement('div');
  const div7 = document.createElement('div');
  const div8 = document.createElement('div');
  const div9 = document.createElement('div');
  const div10 = document.createElement('div');
  div.innerHTML =  `Nome     : ${nome.value}`
  div2.innerHTML = `E-mail   : ${email.value}`
  div3.innerHTML = `CPF      : ${cpf.value}`
  div4.innerHTML = `Endereço : ${endereco.value}`
  div5.innerHTML = `Cidade   : ${cidade.value}`
  div6.innerHTML = `Estado   : ${selec.value}`
  div7.innerHTML = `Moradia  : ${tipo.value}`
  div8.innerHTML = `Resumo   : ${resumo.value}`
  div9.innerHTML = `Descrição do cargo : ${descricao.value}`
  div10.innerHTML = `Data de incio : ${date.value}`
  container.appendChild(div)
  container.appendChild(div2)
  container.appendChild(div3)
  container.appendChild(div4)
  container.appendChild(div5)
  container.appendChild(div6)
  container.appendChild(div7)
  container.appendChild(div8)
  container.appendChild(div9)
  container.appendChild(div10)


}
submit.addEventListener('click', prevent)

