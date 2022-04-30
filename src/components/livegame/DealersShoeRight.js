import React, { useContext } from 'react';
import LiveGameContext from '../../context/livegame/liveGameContext';
import suitProb from '../../utils/suitProb';

const DealersShoeRight = () => {
  const liveGameContext = useContext(LiveGameContext);

  const { dealersShoe, dealersShoeSuitGroups } = liveGameContext;
  const {
    six,
    seven,
    eight,
    nine,
    worthTen
  } = dealersShoeSuitGroups;

  return (
    <div>
      <p>{'six: ' + six.length}</p>
      <p>{suitProb(six.length, dealersShoe.length)}</p>
      <p>{'seven: ' + seven.length}</p>
      <p>{suitProb(seven.length, dealersShoe.length)}</p>
      <p>{'eight: ' + eight.length}</p>
      <p>{suitProb(eight.length, dealersShoe.length)}</p>
      <p>{'nine: ' + nine.length}</p>
      <p>{suitProb(nine.length, dealersShoe.length)}</p>
      <p>{'worthTen: ' + worthTen.length}</p>
      <p>{suitProb(worthTen.length, dealersShoe.length)}</p>
    </div>
  )
}

export default DealersShoeRight;