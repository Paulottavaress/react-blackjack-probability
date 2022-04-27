import React, { useReducer } from 'react';
import LiveGameContext from './liveGameContext';
import LiveGameReducer from './liveGameReducer';
import {
  START_GAME,
  RESET_GAME_STATUS,
  CREATE_DECKS,
  REMOVE_SUIT,
  ADD_SUIT_TO_PLAYERS_HAND,
  ADD_SUIT_TO_DEALERS_HAND
} from '../types';

const LiveGameState = props => {
  const initialState = {
    isGameRunning: false,
    currentRound: 0,
    numberOfDecks: 0,
    deck: ['Ace', 'Ace', 'Ace', 'Ace', '2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9', '9', '9', '10', '10', '10', '10', 'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King'], // (OLD NOTE) This deck will no longer exist
    dealersShoe: [],
    playersHand: [],
    dealersHand: []
  };

  const [state, dispatch] = useReducer(LiveGameReducer, initialState);

  // startGame
  const startGame = () => {
    dispatch({
      type: START_GAME
    });
  }

  // resetGameStatus
  const resetGameStatus = () => {
    dispatch({
      type: RESET_GAME_STATUS
    });
  }

  // createDecks
  const createDecks = (numberOfDecks) => {
    const dealersShoe = [];

    for(let i = 0; i < numberOfDecks; i++){
      // eslint-disable-next-line no-loop-func
      state.deck.forEach(card => {
        dealersShoe.push(card);
      });
    }

    dispatch({
      type: CREATE_DECKS,
      payload: {
        numberOfDecks,
        dealersShoe
      }
    });
  }

  // removeSuit
  const removeSuit = (parsedSuit) => {
    dispatch({
      type: REMOVE_SUIT,
      payload: parsedSuit
    });   
  }

  // addSuitToPlayersHand
  const addSuitToPlayersHand = (parsedSuit) => {
    dispatch({
      type: ADD_SUIT_TO_PLAYERS_HAND,
      payload: parsedSuit
    });
  }

  // addSuitToDealersHand
  const addSuitToDealersHand = (parsedSuit) => {
    dispatch({
      type: ADD_SUIT_TO_DEALERS_HAND,
      payload: parsedSuit
    });
  }

  return (
    <LiveGameContext.Provider
      value={{
        isGameRunning: state.isGameRunning,
        currentRound: state.currentRound,
        numberOfDecks: state.numberOfDecks,
        deck: state.deck,
        dealersShoe: state.dealersShoe,
        suitToBeRemoved: state.suitToBeRemoved,
        playersHand: state.playersHand,
        suitToPlayersHand: state.suitToPlayersHand,
        dealersHand: state.dealersHand,
        suitToDealersHand: state.suitToDealersHand,
        startGame,
        resetGameStatus,
        createDecks,
        removeSuit,
        addSuitToPlayersHand,
        addSuitToDealersHand
      }}
    >
      { props.children }
    </LiveGameContext.Provider>
  )
};

export default LiveGameState;