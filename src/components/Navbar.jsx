export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold">iDryno</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#services" className="hover:text-blue-400">Services</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">Get Started</button>
    </nav>
  );
}
