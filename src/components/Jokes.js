import React, { Component } from 'react'

class Jokes extends Component{

    state = {
        joke : {}
    }

    componentWillMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then( response => response.json())
        .then( json => this.setState({ joke: json }))  
        .catch( () => console.log('Chamada deu ruim :('))  
    }

    render(){
        return( 
            <div>
                <div>
                    <h2>La vai uma piada</h2>
                    <p>{this.state.joke.setup} em {this.state.joke.punchline}</p>
                </div>
            </div>
        )
    }
}

export default Jokes