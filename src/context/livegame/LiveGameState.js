import React, { useReducer, useEffect } from 'react';
import LiveGameContext from './liveGameContext';
import LiveGameReducer from './liveGameReducer';
import {
  START_GAME,
  RESET_GAME_STATUS,
  CREATE_DECKS,
  REMOVE_SUIT,
  ADD_SUIT_TO_PLAYERS_HAND,
  ADD_SUIT_TO_DEALERS_HAND,
  UPDATE_DEALERS_SHOE_SUIT_GROUPS
} from '../types';

const LiveGameState = props => {
  const initialState = {
    isGameRunning: false,
    currentRound: 0,
    numberOfDecks: 0,
    deck: ['Ace', 'Ace', 'Ace', 'Ace', '2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9', '9', '9', '10', '10', '10', '10', 'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King'], // (OLD NOTE) This deck will no longer exist
    playersHand: [],
    dealersHand: [],
    dealersShoe: [],
    dealersShoeSuitGroups: {
      ace: [],
      two: [],
      three: [],
      four: [],
      five: [],
      six: [],
      seven: [],
      eight: [],
      nine: [],
      ten: [],
      jack: [],
      queen: [],
      king: [],
      worthTen: []
    }
  };

  const [state, dispatch] = useReducer(LiveGameReducer, initialState);

  const startGame = () => {
    dispatch({
      type: START_GAME
    });
  }

  const resetGameStatus = () => {
    dispatch({
      type: RESET_GAME_STATUS
    });
  }

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

  const removeSuit = (parsedSuit) => {
    dispatch({
      type: REMOVE_SUIT,
      payload: parsedSuit
    });   
  }

  const addSuitToPlayersHand = (parsedSuit) => {
    dispatch({
      type: ADD_SUIT_TO_PLAYERS_HAND,
      payload: parsedSuit
    });
  }

  const addSuitToDealersHand = (parsedSuit) => {
    dispatch({
      type: ADD_SUIT_TO_DEALERS_HAND,
      payload: parsedSuit
    });
  }

  useEffect(() => {
    dispatch({
      type: UPDATE_DEALERS_SHOE_SUIT_GROUPS
    });
  }, [state.dealersShoe]);

  return (
    <LiveGameContext.Provider
      value={{
        isGameRunning: state.isGameRunning,
        currentRound: state.currentRound,
        numberOfDecks: state.numberOfDecks,
        deck: state.deck,
        playersHand: state.playersHand,
        dealersHand: state.dealersHand,
        dealersShoe: state.dealersShoe,
        dealersShoeSuitGroups: state.dealersShoeSuitGroups,
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