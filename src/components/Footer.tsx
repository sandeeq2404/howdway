export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Howdway. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="/what-we-do" className="hover:text-white">What We Do</a>
          
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </footer>
  );
}
