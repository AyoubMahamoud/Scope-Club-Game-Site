import React, { useState } from 'react';

export default function Games() {
  const [points, setPoints] = useState(100); // Starting points for the user
  const sampleGames = [
    { id: 1, name: 'Team Deborah vs Team Adit: Who can sing better!', date: 'Nov 11, 2024' },
    { id: 2, name: 'Team Anay vs Team Joyce: Who can get a higher score on geo dash', date: 'Nov 11, 2024' },
  ];

  const handleBet = (betAmount: number) => {
    if (points >= betAmount) {
      setPoints(points - betAmount);
      alert(`Bet placed! You have ${points - betAmount} points remaining.`);
    } else {
      alert("Insufficient points!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800">Games</h1>
      <p className="mt-2 text-gray-600">Place bets on your favorite games!</p>
      <p className="mt-4 text-lg text-blue-500">Your Points: {points}</p>
      <div className="mt-6 space-y-4">
        {sampleGames.map((game) => (
          <div
            key={game.id}
            className="px-6 py-4 bg-white shadow-lg rounded-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-bold text-black">{game.name}</h2>
            <p className="text-gray-700">{game.date}</p>
            <button
              onClick={() => handleBet(10)} // Betting 10 points for each game
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Bet 10 Points
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


