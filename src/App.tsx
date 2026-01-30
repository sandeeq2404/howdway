import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatbotWidget from "./components/ChatbotWidget";

export default function App() {
  const location = useLocation();

  // ✅ Auto-open only on home page
  const shouldAutoOpen = location.pathname === "/";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/what-we-do" element={<WhatWeDo />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>

<ChatbotWidget autoOpen={shouldAutoOpen} />
<Footer />
    </div>
  );
}
