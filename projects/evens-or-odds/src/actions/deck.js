import { DECK, DECK_DRAW } from './types'

export const fetchDeckResults = deckJson => {
    const { remaining, deck_id } = deckJson

    return  { type: DECK.FETCH_SUCCESS, remaining, deck_id  }
}

export const fetchDeckError = error => {
    return  { type: DECK.FETCH_ERROR, message: error.message  }
}

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => {
        console.log(response.status)
        if (response.status !== 200){
            throw new Error("Erro ao efetuar chamada da api")
        }
        return response.json()
    })
    .then(json => dispatch(fetchDeckResults(json)))
    .catch(error => dispatch(fetchDeckError(error)))
}

export const fetchDrawCard = (deck_id) => dispatch => {
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    .then(response => {
        if (response.status !== 200){
            throw new Error("Erro ao efetuar chamada da api")
        }
        return response.json()
    })
    .then(json => dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaning
    }))
    .catch(error => dispatch({
        type: DECK_DRAW.FETCH_ERROR, message: 'opaasbcab'
    }))
}