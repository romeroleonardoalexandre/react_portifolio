import { SET_GAME_START, SET_INSTRUCTIONS_EXPANDED } from './types'

//actions
export const startGame = () => {
    return { type: SET_GAME_START, gameStarted: true }
}

export const endGame = () => {
    return { type: SET_GAME_START, gameStarted: false }
}

export const expandInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }
}

export const collapseInstructions = () => {
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }
}