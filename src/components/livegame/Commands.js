import React, { useState, useContext } from 'react';
import LiveGameContext from '../../context/livegame/liveGameContext';
import formatSuitInput from '../../utils/formatSuitInput';

const Commands = () => {
  const liveGameContext = useContext(LiveGameContext);

  const [numberOfDecks, setNumberOfDecks] = useState(1);
  const [suitToPlayersHand, setSuitToPlayersHand] = useState('');
  const [suitToDealersHand, setSuitToDealersHand] = useState('');
  const [suitToBeRemoved, setSuitToBeRemoved] = useState('');

  const onChangeNumberOfDecks = e => setNumberOfDecks(e.target.value);
  const onSuitToPlayersHand = e => setSuitToPlayersHand(e.target.value);
  const onSuitToDealersHand = e => setSuitToDealersHand(e.target.value);
  const onSuitToBeRemoved = e => setSuitToBeRemoved(e.target.value);

  const { 
    dealersShoe,
    isGameRunning,
    resetGameStatus,
    createDecks,
    startGame,
    addSuitToPlayersHand,
    addSuitToDealersHand,
    removeSuit
  } = liveGameContext;

  const onGameStart = e => {
    e.preventDefault();
    resetGameStatus();
    createDecks(Number(numberOfDecks));
    startGame();
  }

  // (OLD NOTE) Ace Jack Ace player hand -> I guess there is an error about point calculations (try this sequence of cards)
  const onAdditionToPlayersHand = (e) => {
    e.preventDefault();

    const parsedSuit = formatSuitInput(suitToPlayersHand);
    const index = dealersShoe.indexOf(parsedSuit);

    if (index > -1) {
      addSuitToPlayersHand(parsedSuit);
      const index = dealersShoe.indexOf(parsedSuit);

      if (index > -1) {
        removeSuit(parsedSuit);
      }
    }
  }

  const onAdditionToDealersHand = (e) => {
    e.preventDefault();

    const parsedSuit = formatSuitInput(suitToDealersHand);
    const index = dealersShoe.indexOf(parsedSuit);

    if (index > -1) {
      addSuitToDealersHand(parsedSuit);
      const index = dealersShoe.indexOf(parsedSuit);

      if (index > -1) {
        removeSuit(parsedSuit);
      }
    }
  }

  const onSuitRemoval = (e) => {
    e.preventDefault();

    const parsedSuit = formatSuitInput(suitToBeRemoved);
    const index = dealersShoe.indexOf(parsedSuit);

    if (index > -1) {
      removeSuit(parsedSuit);
    }
  }

  if (!isGameRunning) return (
    <form onSubmit={onGameStart}>
      <div className="form-group">
        <label htmlFor="numberOfDecks">Insert the number of decks you will be playing with:</label>
        <input
          type="number"
          name="numberOfDecks"
          value={numberOfDecks}
          onChange={onChangeNumberOfDecks}
        />
      </div>
      <input
        type="submit"
        value="Start Game"
        className="btn btn-primary btn-block" 
      />
    </form>
  )

  return (
    <div className="container">
      <div className="row">
        <form className="col-sm" onSubmit={onAdditionToPlayersHand}>
          <div className="form-group">
            <label htmlFor="suitToPlayersHand">Your hand:</label>
            <input
              type="text"
              name="suitToPlayersHand"
              value={suitToPlayersHand}
              onChange={onSuitToPlayersHand}
            />     
          </div>
          <input
            type="submit"
            value="ADD TO PLAYER'S"
            className="btn btn-primary btn-block" 
          />
        </form>
        <form className="col-sm" onSubmit={onAdditionToDealersHand}>
          <div className="form-group">
            <label htmlFor="suitToDealersHand">Dealer's opening card:</label>
            <input
              type="text"
              name="suitToDealersHand"
              value={suitToDealersHand}
              onChange={onSuitToDealersHand}
            />     
          </div>
          <input
            type="submit"
            value="ADD TO DEALER'S"
            className="btn btn-primary btn-block" 
          />
        </form>
        <form className="col-sm" onSubmit={onSuitRemoval}>
          <div className="form-group">
            <label htmlFor="suitToBeRemoved">Remove suit from the dealer's shoe:</label>
            <input
              type="text"
              name="suitToBeRemoved"
              value={suitToBeRemoved}
              onChange={onSuitToBeRemoved}
            />     
          </div>
          <input
            type="submit"
            value="REMOVE SUIT"
            className="btn btn-primary btn-block" 
          />
        </form>
      </div>
    </div>
  )
}

export default Commands;