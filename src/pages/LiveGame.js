import React, { useContext } from 'react';
import Commands from '../components/livegame/Commands';
import LiveGameContext from '../context/livegame/liveGameContext';
import DealersShoeLeft from '../components/livegame/DealersShoeLeft';
import DealersShoeRight from '../components/livegame/DealersShoeRight';

const LiveGame = () => {
  const liveGameContext = useContext(LiveGameContext);

  const { isGameRunning } = liveGameContext;

  return (
    <div>
      { isGameRunning && 
      <div className='d-flex justify-content-between'>
        <DealersShoeLeft />
        <DealersShoeRight />
      </div>}
      <Commands />
    </div>
  )
}

export default LiveGame;