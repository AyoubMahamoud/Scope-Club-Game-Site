import { useEffect, useState } from 'react';

export default function Profile() {
  const [points, setPoints] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1); // Number between 1 and 10

  // Fetch points from the API
  useEffect(() => {
    fetch('/api/points')
      .then((response) => response.json())
      .then((data) => setPoints(data.points));
  }, []);

  // Function to handle the guess
  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (guessNumber === targetNumber) {
      setMessage('Congratulations! You guessed correctly!');
      setPoints(points + 10); // Reward with 10 points
      setTargetNumber(Math.floor(Math.random() * 10) + 1); // Reset target number
    } else if (guessNumber > targetNumber) {
      setMessage('Too high! Try again.');
      setPoints(points - 1); // Deduct 1 point for incorrect guess
    } else {
      setMessage('Too low! Try again.');
      setPoints(points - 1); // Deduct 1 point for incorrect guess
    }
    setGuess(''); // Clear the input
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Your Profile</h1>
      <p className="text-lg mb-8 text-gray-200">Track your points and play a mini-game!</p>
      
      <div className="bg-white text-gray-800 px-8 py-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mb-8">
        <p className="text-3xl font-semibold text-center">Points</p>
        <p className="text-5xl font-extrabold text-center text-blue-600 mt-2">{points}</p>
      </div>

      {/* Guess the Number Mini-Game */}
      <div className="bg-white text-gray-800 px-8 py-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Guess the Number</h2>
        <p className="text-gray-600 mb-4">Guess a number between 1 and 10!</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="px-4 py-2 rounded-lg border border-gray-300 text-center mb-4 w-full"
        />
        <button
          onClick={handleGuess}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          Submit Guess
        </button>
        {message && <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>}
      </div>
    </div>
  );
}





  