import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-lg font-semibold tracking-tight">
          HOWDWAY
        </Link>

        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-4 px-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
