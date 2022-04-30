import {
  START_GAME,
  RESET_GAME_STATUS,
  CREATE_DECKS,
  REMOVE_SUIT,
  ADD_SUIT_TO_PLAYERS_HAND,
  ADD_SUIT_TO_DEALERS_HAND,
  UPDATE_DEALERS_SHOE_SUIT_GROUPS
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
    case UPDATE_DEALERS_SHOE_SUIT_GROUPS:
      return {
        ...state,
        dealersShoeSuitGroups: {
          ace: state.dealersShoe.filter(suit => { return suit === 'Ace' }),
          two: state.dealersShoe.filter(suit => { return suit === '2' }),
          three: state.dealersShoe.filter(suit => { return suit === '3' }),
          four: state.dealersShoe.filter(suit => { return suit === '4' }),
          five: state.dealersShoe.filter(suit => { return suit === '5' }),
          six: state.dealersShoe.filter(suit => { return suit === '6' }),
          seven: state.dealersShoe.filter(suit => { return suit === '7' }),
          eight: state.dealersShoe.filter(suit => { return suit === '8' }),
          nine: state.dealersShoe.filter(suit => { return suit === '9' }),
          ten: state.dealersShoe.filter(suit => { return suit === '10' }),
          jack: state.dealersShoe.filter(suit => { return suit === 'Jack' }),
          queen: state.dealersShoe.filter(suit => { return suit === 'Queen' }),
          king: state.dealersShoe.filter(suit => { return suit === 'King' }),
          worthTen: state.dealersShoe.filter(suit => { return suit === '10' || suit === 'Jack' || suit === 'Queen' || suit === 'King' })
        }
      }
    default:
      return state;
  }
}

export default LiveGameReducer;