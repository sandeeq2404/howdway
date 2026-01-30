import aboutImage from '../assets/main/home.png';
import ExpandingServices from '../components/ExpandingServices';

import kmgurukulamLogo from '../assets/main/kmgurukulam.webp';
import littleOrchidsLogo from '../assets/main/littleorchids.webp';
import home1Image from '../assets/main/home1.webp';

import ChatbotWidget from '../components/ChatbotWidget'





const Home = () => {
  return (
    <div className="w-full min-h-screen text-white font-sans bg-[#0b0d10]">
      
      {/* HERO SECTION */}
<section className="relative w-full min-h-screen flex items-center overflow-hidden">

  {/* Background glow / texture */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0d10] to-black opacity-90" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          The New Standard
          <br />
          in <span className="font-normal">AI & Data Intelligence</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
          We scale businesses online by building AI chatbots, RAG systems,
          real-time analytics, and intelligent digital platforms.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 bg-[#ff5f5f] hover:bg-[#ff4a4a] text-black px-8 py-4 rounded-lg text-sm font-medium transition"
        >
          Contact Us
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative hidden md:flex justify-center items-end">

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b0d10] to-transparent z-10" />

        <img
          src={home1Image}
          alt="AI Technology Illustration"
          className="
            w-full
            max-w-xl
            object-contain
            opacity-95
            translate-y-10
            animate-[fadeUp_1.2s_ease-out_forwards]
            drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]
          "
        />
      </div>

    </div>
  </div>

</section>



      {/* ABOUT US SECTION */}
<section className="relative w-full bg-[#0b0d10] py-28">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-light leading-tight">
        Building for the
        <br />
        <span className="font-normal">Future of Technology</span>
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
        We are a team of engineers, thinkers, and builders driven by one belief —
        <span className="text-white"> technology should empower everyone.</span>
      </p>

      <p className="text-gray-300 leading-relaxed max-w-xl">
        As an India-based AI startup, we focus on building future-ready products
        while actively spreading AI knowledge through online webinars, learning
        sessions, and real-world implementations.
      </p>

      <p className="text-gray-300 leading-relaxed max-w-xl">
        We constantly experiment, learn, and grow — with the vision of turning
        this company into one of the most impactful tech teams of tomorrow.
        Our journey is just beginning, and we’re building it together.
      </p>

      {/* CTA */}
      <div className="pt-4">
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          More About Us →
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center md:justify-end">
      <img
        src={aboutImage}
        alt="Our Team and Vision"
        className="w-full max-w-md rounded-2xl object-contain opacity-90"
      />
    </div>

  </div>
</section>

{/* OUR CLIENTS SECTION */}
<section className="relative w-full bg-[#0b0d10] py-24 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-8">

    {/* Section Title */}
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-light">
        Trusted by
        <span className="font-normal"> Our Clients</span>
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl">
        We collaborate with institutions and organizations to build reliable,
        future-ready technology solutions.
      </p>
    </div>

    {/* Client Logos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-3xl">

      {/* KM Gurukulam */}
      <a
        href="https://kmgurukulam.in"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-[#121418] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
      >
        <img
          src={kmgurukulamLogo}
          alt="KM Gurukulam"
          className="max-h-20 object-contain opacity-80 group-hover:opacity-100 transition"
        />
      </a>

      {/* Little Orchids */}
      <a
        href="https://littleorchidspreschool.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-[#121418] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
      >
        <img
          src={littleOrchidsLogo}
          alt="Little Orchids Preschool"
          className="max-h-20 object-contain opacity-80 group-hover:opacity-100 transition"
        />
      </a>

    </div>
  </div>
</section>


{/* WHAT WE DO – EXPANDING SECTION */}
<section className="relative w-full bg-[#0b0d10] py-32">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-light leading-tight">
        Let Your Data Take
        <br />
        Your Business to
        <span className="font-normal"> Higher Grounds</span>
      </h2>

      <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
        We design and build intelligent systems that turn raw data into
        real-world business outcomes — from AI-powered automation to
        real-time decision platforms.
      </p>
    </div>

    {/* RIGHT EXPANDING BOXES */}
    <ExpandingServices />
    <ChatbotWidget autoOpen />

  </div>
</section>



    </div>
  );
};

export default Home;
