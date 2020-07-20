import React, { Component } from 'react';
import { connect } from 'react-redux'

import { startGame, endGame } from '../actions/settings'

import Instruction from './Instructions'
import { fetchNewDeck } from '../actions/deck';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState'

class App extends Component {

  startGame = () => {
    this.props.startGame()
    this.props.fetchNewDeck()

  }

  render() {
    return (
      <div>
        <h2>♡ ♠ Evens or Odds ♣ ♢</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3> O jogo começou </h3>
              <br />
              <GameState />
              <Guess />
              <br />
              <DrawCard />
              <hr />
              <Card />
              <button onClick={this.props.endGame}> Cancelar jogo </button>
            </div>
          ):(
            <div>
              <h3> Um novo jogo te espera </h3>
              <br />
              <button onClick={this.startGame}> Começar novo jogo </button>
            </div>
          )
        }
        <br />
        <Instruction />
      </div>
    );
  }
}

// state para o props
const mapStateToProps = state => {
  const { settings: { gameStarted }, deck: {fetchState, message }} = state
  return { gameStarted, fetchState, message }
}

// dispatch bpara o props
// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     endGame: () => dispatch(endGame()),
//     //fetchDeckResults: (deckJson) => dispatch(fetchDeckResults(deckJson)),
//     fetchnewDeck: () => fetchnewDeck(dispatch)
//   }
// }

const componentConnector = connect(
  mapStateToProps,
  {startGame, endGame, fetchNewDeck }
)


//para disponibilizar o state como prop no <App />
//const componentConnector = connect(mapStateToProps, mapDispatchToProps)

export default componentConnector(App)