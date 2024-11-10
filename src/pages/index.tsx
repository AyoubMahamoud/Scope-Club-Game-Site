import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Scope Club Points Gambling Site!</h1>
      <p className="mt-4 text-xl text-gray-600">Place bets, swap points, and compete for the top spot!</p>
      <div className="mt-6 space-x-4">
        <Link href="/games" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Explore Games
        </Link>
        <Link href="/profile" className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Profile
        </Link>
      </div>
    </div>
  );
}

