import {
  START_GAME,
  RESET_GAME_STATUS,
  CREATE_DECKS,
  REMOVE_SUIT,
  ADD_SUIT_TO_PLAYERS_HAND,
  ADD_SUIT_TO_DEALERS_HAND
} from '../types';

const LiveGameReducer = (state, action) => {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        isGameRunning: true,
        currentRound: 1
      };
    case RESET_GAME_STATUS:
      return {
        ...state,
        dealersShoe: [],
        currentRound: 0
      };
    case CREATE_DECKS:
      return {
        ...state,
        numberOfDecks: action.payload.numberOfDecks,
        dealersShoe: action.payload.dealersShoe
      };
    case ADD_SUIT_TO_PLAYERS_HAND:
      return {
        ...state,
        playersHand: [...state.playersHand, action.payload]
      };
    case ADD_SUIT_TO_DEALERS_HAND:
      return {
        ...state,
        dealersHand: [...state.dealersHand, action.payload]
      };
    case REMOVE_SUIT:
      let isRemoved;
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        dealersShoe: state.dealersShoe.filter((el) => {
          if (el === action.payload && !isRemoved) {
            isRemoved = true;
          } else if (el !== action.payload || isRemoved) {
            return el;
          }
        })
      };
    default:
      return state;
  }
}

export default LiveGameReducer;