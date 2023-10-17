import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Guesses state variable.
  const [guesses, setGuesses] = React.useState([]);
  // Game status state variable.
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(event, tentativeGuess) {
    // Prevent default page refresh behaviour.
    event.preventDefault();

    // Add new guess to guesses array.
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    // If guess === answer, status is 'won'. 
    if(tentativeGuess === answer) {
      setGameStatus('won');
    // Else if number of guesses has reached number allowed, status is 'lost'.
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      { gameStatus == 'won' && 
        <WonBanner numOfGuesses={guesses.length} />
      }
      { gameStatus == 'lost' && 
        <LostBanner answer={answer} />
      }
    </>
  );
}

export default Game;
