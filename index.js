import { useState } from 'react';

export default function Home() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guessCount, setGuessCount] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      setMessage('Vänligen ange ett tal mellan 1 och 100.');
      return;
    }

    setGuessCount(guessCount + 1);

    if (parsedGuess < targetNumber) {
      setMessage('För lågt, försök igen!');
    } else if (parsedGuess > targetNumber) {
      setMessage('För högt, försök igen!');
    } else {
      setMessage(`Korrekt! Du gissade på ${guessCount + 1} försök.`);
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Gissa Talet!</h1>
      <p>Gissa ett tal mellan 1 och 100.</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Ange ditt gissade tal"
        style={{ padding: '5px', fontSize: '16px' }}
      />
      <button
        onClick={handleGuess}
        style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
      >
        Gissa
      </button>
      <p>{message}</p>
      <p>Försök: {guessCount}</p>
    </div>
  );
}
