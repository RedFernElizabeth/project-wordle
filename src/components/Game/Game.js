import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Guess results state variable.
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(event, tentativeGuess) {
    // Prevent default page refresh behaviour.
    event.preventDefault();

    // Add new guess to guesses array.
    setGuesses([...guesses, tentativeGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput handleSubmitGuess={handleSubmitGuess}></GuessInput>
    </>
  );
}

export default Game;
