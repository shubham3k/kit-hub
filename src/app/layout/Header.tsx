import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300">
          KIT HUB
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="text-white hover:text-green-400">
            About
          </Link>
          <Link href="/forum" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link href="/events" className="text-white hover:text-gray-300">
            Events
          </Link>
          <Link href="/clubs" className="text-white hover:text-gray-300">
            Clubs
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
          <Link href="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Signup
          </Link>
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-green-700">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
