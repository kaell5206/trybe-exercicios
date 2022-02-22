import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      CliqueChuva: 0,
      CliqueBarco: 0,
      CliqueIlha: 0,
    }

    this.handleChuva = this.handleChuva.bind(this);
    this.handleBarco = this.handleBarco.bind(this);
    this.handleIlha = this.handleIlha.bind(this);
  }

  handleIlha() {
    this.setState((previous, _props) => ({
      CliqueIlha: previous.CliqueIlha + 1,
    }))
    let color = this.state.CliqueIlha % 2 === 0 ? 'green' : 'white';
    console.log(color)
    console.log('Espera o barco! de numero :' + this.state.CliqueIlha)
  }

  handleBarco() {
    this.setState((previous, _props) => ({
      CliqueBarco: previous.CliqueBarco + 1,
    }))
    let color = this.state.CliqueBarco % 2 === 0 ? 'green' : 'white';
    console.log(color)
    console.log('Saiu do porto! '+ this.state.CliqueBarco)
  }
  
  handleChuva() {
    this.setState((previous, _props) => ({
      CliqueChuva: previous.CliqueChuva + 1,
    }))
    console.log('Botão 1 color :' + this.changeColor(this.state.CliqueChuva));
    console.log('CHOVEU! '+ this.state.CliqueChuva + ' VEZES')
  }

  changeColor(n) {
    let color = n % 2 === 0 ? 'green' : 'white';
    return color
  }

  render() {
    return (
      <div className="App">
        <button className={this.props.color} onClick={this.handleChuva}
        style={{backgroundColor: this.changeColor(this.state.CliqueChuva)}}>{this.state.CliqueChuva}</button>
        <button className={this.props.color} onClick={this.handleBarco}
        style={{backgroundColor: this.changeColor(this.state.CliqueBarco)}}>{this.state.CliqueBarco}</button>
        <button className={this.props.color} onClick={this.handleIlha}
        style={{backgroundColor: this.changeColor(this.state.CliqueIlha)}}>{this.state.CliqueIlha}</button>
      </div>
    );
  }
}

export default App;
