import React from 'react-redux'
import  { connect } from 'react-redux'
import { fetchDrawCard } from '../actions/deck'

const DrawCard = props => {
    return (
        <div>
            <button onClick={ fetchDrawCard(deck_id) }>Ver próxima carta!</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return { fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id)) }
}

export default connect(
    ({deck: { deck_id }}) => ({deck_id}),
    mapDispatchToProps
)(DrawCard)