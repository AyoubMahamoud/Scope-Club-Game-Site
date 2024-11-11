// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-gray-800">Welcome to the Scope Club Points Gambling Site!</h1>
//       <p className="mt-4 text-xl text-gray-600">Place bets, swap points, and compete for the top spot!</p>
//       <div className="mt-6 space-x-4">
//         <Link href="/games" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//         Explore Games
//         </Link>
//         <Link href="/profile" className="px-4 py-2 bg-green-500 text-white rounded-lg">
//         Profile
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 text-white">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg text-center">
        Welcome to the Scope Club Points Gambling Site!
      </h1>
      <p className="mt-4 text-2xl text-gray-200 text-center">
        Place bets, swap points, and compete for the top spot!
      </p>
      <div className="mt-8 flex space-x-6">
        <Link href="/games">
          <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            Explore Games
          </a>
        </Link>
        <Link href="/profile">
          <a className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            Profile
          </a>
        </Link>
      </div>
    </div>
  );
}
