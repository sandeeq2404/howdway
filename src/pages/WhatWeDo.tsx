import PageTransition from '../components/PageTransition';

export default function WhatWeDo() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">

          {/* Intro */}
          <section className="mb-24">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
              What We Do
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              We help businesses build intelligent systems that scale operations,
              reduce manual effort, and make better decisions — without adding complexity.
            </p>
          </section>

          {/* AI Section */}
          <section className="mb-28">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Artificial Intelligence
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              We design AI systems that replace repetitive work, accelerate internal processes,
              and support customers at scale. From AI chatbots to enterprise-grade automation,
              our solutions are built to reduce operational cost while increasing efficiency.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mt-6">
              The result is fewer manual dependencies, faster response times,
              and systems that grow with the business instead of slowing it down.
            </p>
          </section>

          {/* Scaling */}
          <section className="mb-28">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Scaling Businesses with Technology
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              Scaling is not about hiring faster — it’s about building systems
              that can handle growth without breaking.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mt-6">
              We help startups and enterprises structure their technology in a way
              that supports growth, controls cost, and maintains performance as demand increases.
            </p>
          </section>

          {/* Supporting Capabilities */}
          <section className="mb-28">
            <h2 className="text-4xl md:text-5xl font-medium mb-10">
              Supporting Capabilities
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                <span className="text-white">Enterprise AI Solutions</span> — Custom-built systems tailored to internal workflows and business logic.
              </p>

              <p>
                <span className="text-white">Real-Time Analytics</span> — Live data visibility to support faster and more accurate decisions.
              </p>

              <p>
                <span className="text-white">Websites & Platforms</span> — High-performance digital products built for clarity and scale.
              </p>

              <p>
                <span className="text-white">SEO & Growth Foundations</span> — Technical and content-driven visibility designed for long-term reach.
              </p>

              <p>
                <span className="text-white">Consulting & Strategy</span> — Clear direction on AI adoption, product architecture, and system design.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              We don’t sell tools.  
              We build systems that quietly do the work — so businesses can focus on what matters.
            </p>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
