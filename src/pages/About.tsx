import React from 'react';
import PageTransition from '../components/PageTransition';

import homeImage from '../assets/main/horse.webp';

import kumaravelImg from '../assets/team/kumaravel1.webp';
import thamizhImg from '../assets/team/thamizh1.webp';
import joeImg from '../assets/team/joe2.webp';
import sandeepImg from '../assets/team/sandeep1.webp';

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

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-light mb-20 text-center text-white">
      The People Behind
      <span className="font-normal"> the Vision</span>
    </h2>

    {/* TEAM ROW */}
    <div className="
      flex flex-wrap lg:flex-nowrap
      justify-center
      gap-16
      px-6 lg:px-20
    ">

      {/* Kumaravel */}
      <div className="text-center max-w-[220px]">
        <img
          src={kumaravelImg}
          alt="Kumaravel N"
          className="
            w-40 h-40
            mx-auto
            rounded-full
            object-cover
            mb-6
          "
        />
        <h3 className="text-lg font-medium text-white">
          Kumaravel N
        </h3>
        <p className="text-sm text-white mt-1">
          CEO
        </p>
        <p className="text-sm text-white mt-1">
          Data Science 
        </p>
      </div>

      {/* Thamizhselvan */}
      <div className="text-center max-w-[220px]">
        <img
          src={thamizhImg}
          alt="Thamizhselvan M"
          className="
            w-40 h-40
            mx-auto
            rounded-full
            object-cover
            mb-6
          "
        />
        <h3 className="text-lg font-medium text-white">
          Thamizhselvan M
        </h3>
        <p className="text-sm text-white mt-1">
          CTO 
        </p>
        <p className="text-sm text-white mt-1">
          Software Developer
        </p>
      </div>

      {/* Joe */}
      <div className="text-center max-w-[220px]">
        <img
          src={joeImg}
          alt="Joe Blessyn K"
          className="
            w-40 h-40
            mx-auto
            rounded-full
            object-cover
            mb-6
          "
        />
        <h3 className="text-lg font-medium text-white">
          Joe Blessyn K
        </h3>
        <p className="text-sm text-white mt-1">
          People & Operations Head 
        </p>
        <p className="text-sm text-white mt-1">
          AI Engineer
        </p>
      </div>

      {/* Sandeep */}
      <div className="text-center max-w-[220px]">
        <img
          src={sandeepImg}
          alt="Sandeep Kumaar T"
          className="
            w-40 h-40
            mx-auto
            rounded-full
            object-cover
            mb-6
          "
        />
        <h3 className="text-lg font-medium text-white">
          Sandeep Kumaar T
        </h3>
        <p className="text-sm text-white mt-1">
          Data Engineer
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
