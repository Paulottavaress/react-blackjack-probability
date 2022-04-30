// We should allow users to input just 'A', 'J', 'Q', 'K' for a faster input.
const formatSuitInput = (input) => {
  input = input.toLowerCase();
  
  if (input === 'ace' || input === 'jack' || input === 'queen' || input === 'king') {
    let suit = '';
    
    input.split('').forEach((letter, i) => {
      if (i === 0) {
        letter = letter.toUpperCase();
      } 
      suit += letter;
    })
    return suit;
  }
  return input;
}

export default formatSuitInput;