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
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-white text-lg font-semibold tracking-wide"
        >
          HOWDWAY
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition ${
                  active
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 rounded-lg border border-white/20 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 space-y-4 border-t border-white/10">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-sm ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 px-4 py-2 rounded-lg border border-white/20 text-center text-white hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
