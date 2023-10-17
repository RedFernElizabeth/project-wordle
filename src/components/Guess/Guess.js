import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '/src/game-helpers.js';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return (
    <span 
      className={className}
    >
      {letter}
    </span>
  )
}

function Guess({guess, answer}) {
  // Check guess against answer.
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell 
          key={num} 
          status={result ? result[num].status : undefined}
          letter={result ? result[num].letter : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;