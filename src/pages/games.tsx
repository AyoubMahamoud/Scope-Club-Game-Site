import React, { useState } from 'react';

export default function Games() {
  const [points, setPoints] = useState(100); // Starting points for the user
  const sampleGames = [
    { id: 1, name: 'Team Deborah vs Team Adit: Who can sing diamonds by Rihanna better!', date: 'Nov 11, 2024' },
    { id: 2, name: 'Team Anay vs Team Joyce: Who can get a higher score on geometry dash', date: 'Nov 11, 2024' },
  ];
  const [gameResults, setGameResults] = useState<{ [key: number]: string }>({});
  // Store results for each game

  const handleBet = (betAmount: number) => {
    if (points >= betAmount) {
      setPoints(points - betAmount);
      alert(`Bet placed! You have ${points - betAmount} points remaining.`);
    } else {
      alert("Insufficient points!");
    }
  };

  const handleReveal = (gameId: number) => {
    // Define possible outcomes
    const outcomes = [
      { result: 'You won 20 points!', pointsChange: 20 },
      { result: 'You lost 10 points!', pointsChange: -10 },
      { result: 'It’s a tie! No points lost.', pointsChange: 0 },
      { result: 'Better luck next time! Lose 5 points.', pointsChange: -5 },
    ];

    // Pick a random outcome
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    // Update points based on the outcome
    setPoints(points + randomOutcome.pointsChange);

    // Save the result for this game
    setGameResults((prevResults) => ({
      ...prevResults,
      [gameId]: randomOutcome.result,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-600 text-white">
      <h1 className="text-4xl font-extrabold drop-shadow-lg">Games</h1>
      <p className="mt-2 text-xl text-gray-200">Place bets on your favorite games!</p>
      <p className="mt-4 text-lg font-semibold text-yellow-300">Your Points: {points}</p>
      <div className="mt-6 space-y-6 w-full max-w-md">
        {sampleGames.map((game) => (
          <div
            key={game.id}
            className="px-6 py-5 bg-white text-gray-800 shadow-xl rounded-xl flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-black">{game.name}</h2>
            <p className="mt-2 text-gray-600">{game.date}</p>

            {/* Reveal Button */}
            <button
              onClick={() => handleReveal(game.id)}
              className="mt-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Click to Reveal Outcome
            </button>

            {/* Display Result if it exists */}
            {gameResults[game.id] && (
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {gameResults[game.id]}
              </p>
            )}

            {/* Bet Button */}
            <button
              onClick={() => handleBet(10)} // Betting 10 points for each game
              className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Bet 10 Points
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

//hi