import React, { useContext } from 'react';
import LiveGameContext from '../../context/livegame/liveGameContext';
import suitProb from '../../utils/suitProb';

const DealersShoeLeft = () => {
  const liveGameContext = useContext(LiveGameContext);

  const { dealersShoe, dealersShoeSuitGroups } = liveGameContext;
  const {
    ace,
    two,
    three,
    four,
    five
  } = dealersShoeSuitGroups;

  return (
    <div>
      <p>{'ace: ' + ace.length}</p>
      <p>{suitProb(ace.length, dealersShoe.length)}</p>
      <p>{'two: ' + two.length}</p>
      <p>{suitProb(two.length, dealersShoe.length)}</p>
      <p>{'three: ' + three.length}</p>
      <p>{suitProb(three.length, dealersShoe.length)}</p>
      <p>{'four: ' + four.length}</p>
      <p>{suitProb(four.length, dealersShoe.length)}</p>
      <p>{'five: ' + five.length}</p>
      <p>{suitProb(five.length, dealersShoe.length)}</p>
    </div>
  )
}

export default DealersShoeLeft;