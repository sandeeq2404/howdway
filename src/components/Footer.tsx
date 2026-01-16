import { Instagram, Linkedin, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white/70  mb-4">
            HOWDWAY
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            We build scalable AI chatbots and automation solutions that help
            businesses grow faster and smarter.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold text-white/70 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/what-we-do" className="hover:text-[#ff5f5f]">What We Do</a></li>
            <li><a href="/about" className="hover:text-[#ff5f5f]">About</a></li>
            <li><a href="/contact" className="hover:text-[#ff5f5f]">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold text-white/70 mb-4">
            Contact
          </h4>

          <div className="flex items-start gap-3 text-sm text-white/70 mb-3">
            <MapPin size={16} />
            <span>
              Chennai, Tamil Nadu<br />
              India
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/70">
            <Phone size={16} />
            <span>+91 84897 97817</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm font-semibold text-white/70 mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/howdway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-70 hover:text-[#ff5f5f] transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://linkedin.com/company/howdway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#ff5f5f] transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 pt-6 border-t border-black/10 text-center text-sm text-[#4b4b4b]">
        © {new Date().getFullYear()} Howdway. All rights reserved.
      </div>
    </footer>
  );
}
