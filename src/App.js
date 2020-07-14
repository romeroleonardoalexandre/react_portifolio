import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
    this.addCounter = this.addCounter.bind(this)
  }

  addCounter() {
    this.setState({
      counter:this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Meu Portifolio</h1>
        <p>Ola meu nome é Alexandre</p>
        <p>Analista desenvolvedor PL na Linx</p>
        <p>{ this.state.counter }</p>
        <button onClick={this.addCounter}>Adicionar contador</button>
      </div>
    )
  }
}

export default App;