const form = document.querySelector('#form');
const selec = documento.querySelector('#estado');
const estados = ['Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']

function adicionaEstados() {
  let valor;
  for (let i = 0; i < estados.length; i+=1) {
    const option = document.createElement('option');
    option.setAttribute('name', valor)
  }
}
