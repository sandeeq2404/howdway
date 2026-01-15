import { useState } from 'react';
import { motion } from 'framer-motion';

type Service = {
  title: string;
  subs: string[];
  desc: string;
};

const services: Service[] = [
  {
    title: 'Web Dev & Growth',
    subs: ['React', 'SEO', 'Ads'],
    desc: 'We build high-performance sites and run targeted ad campaigns.',
  },
  {
    title: 'Mobile Apps',
    subs: ['Flutter', 'Kotlin'],
    desc: 'Native and cross-platform apps designed for speed.',
  },
  {
    title: 'Predictive ML',
    subs: ['Supply Chain', 'Delivery Est'],
    desc: 'Like our model that predicts delivery time based on logistics data.',
  },
  {
    title: 'AI Chatbots (RAG)',
    subs: ['RAG', 'Support AI'],
    desc: 'Chatbots trained on your business data for instant answers.',
  },
  {
    title: 'Workflow Automation',
    subs: ['Internal Tools', 'API'],
    desc: 'Eliminate repetitive tasks by connecting your software ecosystems.',
  },
  {
    title: 'Real-Time Analytics',
    subs: ['Live Dashboards', 'Kafka'],
    desc: 'Visualize streaming data for immediate decision-making.',
  },
  {
    title: 'Cloud Migration',
    subs: ['AWS', 'Azure', 'GCP'],
    desc: 'Securely migrate legacy databases to scalable cloud architectures.',
  },
  {
    title: 'Data Analytics',
    subs: ['BI', 'Visualization'],
    desc: 'Turn raw data into actionable insights and trend analysis.',
  },
  {
    title: 'CX Optimization',
    subs: ['Churn Prediction', 'User Journey'],
    desc: 'Analyze behavior to personalize interactions and improve experience.',
  },
  {
    title: 'Custom Consultancy',
    subs: ['MVP', 'R&D'],
    desc: 'Bespoke engineering for unique challenges.',
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#0b0d10] py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-light mb-16">
          What We
          <span className="font-normal"> Build</span>
        </h2>

        {/* GRID */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={service.title}
                layout
                onMouseEnter={() => setActive(index)}
                className={`
                  relative cursor-pointer rounded-2xl p-6
                  border border-white/10
                  bg-white/5 backdrop-blur-xl
                  transition-colors
                  ${isActive ? 'md:col-span-2' : ''}
                `}
              >
                {/* INNER CONTENT */}
                <motion.div layout className="h-full flex flex-col justify-between">
                  {/* TITLE */}
                  <h3 className="text-xl font-medium text-white">
                    {service.title}
                  </h3>

                  {/* SUB SERVICES */}
                  <motion.ul
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1, y: isActive ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-1 text-sm text-gray-400"
                  >
                    {service.subs.map(sub => (
                      <li key={sub}>• {sub}</li>
                    ))}
                  </motion.ul>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-6 left-6 right-6 text-sm text-gray-300"
                  >
                    {service.desc}
                  </motion.p>
                </motion.div>

                {/* NEON ACCENT */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0
                  hover:opacity-100 transition"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
