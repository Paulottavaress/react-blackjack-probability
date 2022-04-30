const suitProb = (suitGroupLength, dealersShoeLength) => {
  const suitProb = ((suitGroupLength / dealersShoeLength) * 100).toFixed(2);

  return suitProb + '%';
};

export default suitProb;