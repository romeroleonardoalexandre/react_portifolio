import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';
 
const Instructions = props => {
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;
 
    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instruções</h3>
                <p>Bem vindo ao evens or odds. O jogo funciona assim:</p>
                <p>O baralho será embaralhado. Então você deve escolher: a proxima carta será par ou impar?</p>
                <p>Faça sua escolha a cada carta virada,e veja quantas você consegue acertar!</p>
                <br />
                <button onClick={collapseInstructions}>Não mostrar</button>
            </div>
        )
    }
 
    return (
        <div>
            <h3>Instruções</h3>
            <p>Bem vindo ao evens or odds. O jogo funciona assim...</p>
            <br />
            <button onClick={expandInstructions}>Mostrar mais</button>
        </div>
    )
}
 
const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    }
}
 
const mapStateToProps = state => {
    return {
        instructionsExpanded: state.settings.instructionsExpanded
    }
}
 
const componentConnector = connect(mapStateToProps, mapDispatchToProps);
 
export default componentConnector(Instructions);