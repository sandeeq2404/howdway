import React from 'react';
import PageTransition from '../components/PageTransition';

import homeImage from '../assets/main/horse.webp';

import kumaravelImg from '../assets/team/kumaravel.webp';
import thamizhImg from '../assets/team/thamizh.webp';
import joeImg from '../assets/team/joe.webp';

const About = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#0b0d10] text-white font-sans">

        {/* INTRO / ABOUT */}
        <section className="relative w-full py-32">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light leading-tight">
                Building for the
                <br />
                <span className="font-normal">Future of Technology</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                We are a team of engineers, thinkers, and builders driven by one
                belief — <span className="text-white">technology should empower everyone.</span>
              </p>

              <p className="text-gray-300 leading-relaxed max-w-xl">
                As an India-based AI startup, we focus on building future-ready
                products while actively spreading AI knowledge through online
                webinars, learning sessions, and real-world implementations.
              </p>

              <p className="text-gray-300 leading-relaxed max-w-xl">
                We constantly experiment, learn, and grow — with the vision of
                turning this company into one of the most impactful tech teams of
                tomorrow. Our journey is just beginning, and we’re building it
                together.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:justify-end">
              <img
                src={homeImage}
                alt="Our Vision"
                className="w-full max-w-md rounded-2xl object-contain opacity-90"
              />
            </div>

          </div>
        </section>

        {/* STORY / INSPIRATION */}
        <section className="relative w-full py-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-8 text-center space-y-6">

            <h2 className="text-3xl md:text-4xl font-light">
              Inspired by Stories That
              <span className="font-normal"> Changed the World</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Every great technology company begins with a simple idea and an
              unshakable belief. One of our inspirations comes from the story of
              Samsung — a company that started small, navigating uncertainty,
              experimentation, and constant reinvention.
            </p>

            <p className="text-gray-300 leading-relaxed">
              From its early days to becoming a global technology powerhouse,
              Samsung’s journey reminds us that innovation is not about size,
              but about vision, discipline, and persistence.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We carry that same mindset — starting focused, thinking long-term,
              and building systems that scale with impact. Our goal isn’t just
              growth, but meaningful contribution to the future of technology.
            </p>

          </div>
        </section>

        {/* TEAM */}
        <section className="relative w-full py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-4xl md:text-5xl font-light mb-20 text-center">
              The People Behind
              <span className="font-normal"> the Vision</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* CEO */}
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <img
                  src={kumaravelImg}
                  alt="CEO"
                  className="w-full h-72 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-medium">Kumaravel</h3>
                <p className="text-sm text-[#5eead4] mt-1">Founder & CEO</p>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  Vision-driven leader focused on building scalable AI products
                  and shaping long-term technology strategy.
                </p>
              </div>

              {/* CTO */}
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <img
                  src={thamizhImg}
                  alt="CTO"
                  className="w-full h-72 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-medium">Thamizh</h3>
                <p className="text-sm text-[#5eead4] mt-1">CTO</p>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  Architecting intelligent systems, infrastructure, and scalable
                  AI-driven platforms.
                </p>
              </div>

              {/* ENGINEER / TEAM */}
              <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <img
                  src={joeImg}
                  alt="Core Team"
                  className="w-full h-72 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-medium">Joe</h3>
                <p className="text-sm text-[#5eead4] mt-1">Core Engineer</p>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  Building, experimenting, and shipping real-world AI solutions
                  with precision and creativity.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;
