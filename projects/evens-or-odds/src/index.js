import React from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import App from './components/App';
import rootReducer from './reducers'

import './index.css';

// Criacao do store com o reducer
const store = createStore(rootReducer, applyMiddleware(thunk))

// Chama sempre que o state é alterado
store.subscribe(() => {
    console.log(store.getState())
})

const EventsOrOdds = () => {
	 return (
	 	<Provider store={store}><App /></Provider>	
	 )
}

export default EventsOrOdds

