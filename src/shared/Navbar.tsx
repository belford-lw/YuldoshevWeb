import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-white">
          Yo'ldoshev Edu-Center
        </h1>

        <ul className="hidden md:flex gap-6 text-white font-medium">
          <Link to={"/"}>
            <li className="hover:text-blue-500 cursor-pointer">Bosh sahifa</li>
          </Link>
          <Link to={"/course"}>
            <li className="hover:text-blue-500 cursor-pointer">Kurslar</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-blue-500 cursor-pointer">Biz haqimizda</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-blue-500 cursor-pointer">Aloqa</li>
          </Link>
        </ul>

        <button
          className="md:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md px-4 pb-4">
          <ul className="flex flex-col gap-4 text-blue-700 font-medium">
            <li>Bosh sahifa</li>
            <li>Kurslar</li>
            <li>Biz haqimizda</li>
            <li>Aloqa</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;