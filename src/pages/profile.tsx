import { useEffect, useState } from 'react';

export default function Profile() {
  const [points, setPoints] = useState(0);

  // Fetch points from the API
  useEffect(() => {
    fetch('/api/points')
      .then((response) => response.json())
      .then((data) => setPoints(data.points));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800">Your Profile</h1>
      <p className="mt-2 text-gray-600">Track your points and recent transactions.</p>
      <p className="text-2xl mt-4 text-blue-500">Points: {points}</p>
    </div>
  );
}




  