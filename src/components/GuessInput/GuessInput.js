import React from 'react';

function GuessInput({handleSubmitGuess}) {
  // Guess state variable.
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={() => {
        handleSubmitGuess(event, tentativeGuess);

        // Set input back to empty string.
        setTentativeGuess('');
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        id="guess-input" 
        type="text" 
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;