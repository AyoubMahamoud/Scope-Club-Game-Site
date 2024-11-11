// import { useEffect, useState } from 'react';

// export default function Profile() {
//   const [points, setPoints] = useState(0);

//   // Fetch points from the API
//   useEffect(() => {
//     fetch('/api/points')
//       .then((response) => response.json())
//       .then((data) => setPoints(data.points));
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-semibold text-gray-800">Your Profile</h1>
//       <p className="mt-2 text-gray-600">Track your points and recent transactions.</p>
//       <p className="text-2xl mt-4 text-blue-500">Points: {points}</p>
//     </div>
//   );
// }
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Your Profile</h1>
      <p className="text-lg mb-8 text-gray-200">Track your points and recent transactions.</p>
      
      <div className="bg-white text-gray-800 px-8 py-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <p className="text-3xl font-semibold text-center">Points</p>
        <p className="text-5xl font-extrabold text-center text-blue-600 mt-2">{points}</p>
      </div>
    </div>
  );
}





  