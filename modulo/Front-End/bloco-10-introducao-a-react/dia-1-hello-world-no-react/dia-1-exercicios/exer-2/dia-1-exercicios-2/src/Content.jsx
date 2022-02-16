import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
  
];

const list = (value) => {
  return ( <li className='card' >{value}</li> )
}

class Content extends Component {
  render() {
    return <ul className='content'>{conteudos.map((item) => list(`O conteúdo é: ${item.conteudo}\
    Status: ${item.status}\
    Bloco: ${item.bloco}`)) }</ul>
  }
}

export default Content;