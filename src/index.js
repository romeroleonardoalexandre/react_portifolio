import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App';
import './index.css';
import Jokes from './components/Jokes'
import Header from './components/Header'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' render={() => <Header><App /></Header>}></Route>
      <Route path='/jokes' render={() => <Header><Jokes /></Header>}></Route>    
    </Switch>
  </BrowserRouter>
  , 
  document.getElementById('root')
);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       if (true) {
//           throw new Error("Deu erro");
//       }
//       resolve("Promise resolvida");
//   }, 5000);
// });