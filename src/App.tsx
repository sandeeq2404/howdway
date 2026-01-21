import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <--- 1. IMPORT THIS

import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import About from './pages/About';
import Contact from './pages/Contact';



export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <ScrollToTop /> {/* <--- 2. ADD THIS HERE */}
      
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           
        </Routes>
      </main>

      <Footer />
    </div>
  );
}