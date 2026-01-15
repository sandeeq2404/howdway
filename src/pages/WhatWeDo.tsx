import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
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
    desc: 'Models that predict outcomes like delivery time using logistics data.',
  },
  {
    title: 'AI Chatbots (RAG)',
    subs: ['RAG', 'Support AI'],
    desc: 'Chatbots trained on your business data for instant answers.',
  },
  {
    title: 'Workflow Automation',
    subs: ['Internal Tools', 'API'],
    desc: 'Eliminate repetitive tasks by connecting software ecosystems.',
  },
  {
    title: 'Real-Time Analytics',
    subs: ['Live Dashboards', 'Kafka'],
    desc: 'Streaming dashboards for immediate decision-making.',
  },
  {
    title: 'Cloud Migration',
    subs: ['AWS', 'Azure', 'GCP'],
    desc: 'Secure migration to scalable cloud architectures.',
  },
  {
    title: 'Data Analytics',
    subs: ['BI', 'Visualization'],
    desc: 'Turn raw data into actionable insights.',
  },
  {
    title: 'CX Optimization',
    subs: ['Churn Prediction', 'User Journey'],
    desc: 'Behavior analysis to personalize experiences.',
  },
  {
    title: 'Custom Consultancy',
    subs: ['MVP', 'R&D'],
    desc: 'Bespoke engineering for unique challenges.',
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#0b0d10] py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                layout
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className={`
                  relative p-6 rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                  ${isExpanded ? 'md:col-span-2' : ''}
                `}
              >
                {/* TITLE */}
                <h3 className="text-2xl font-medium mb-4">
                  {service.title}
                </h3>

                {/* CONTENT */}
                <div className="relative min-h-[80px]">
                  {/* SUB SERVICES */}
                  {!isExpanded && (
                    <motion.ul
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-wrap gap-2 text-sm text-gray-300"
                    >
                      {service.subs.map((sub, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/10"
                        >
                          {sub}
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {/* DESCRIPTION */}
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 max-w-2xl"
                    >
                      {service.desc}
                    </motion.p>
                  )}
                </div>

                {/* ACTION BUTTON */}
                {!isExpanded && (
                  <button
                    onClick={() => setExpandedIndex(i)}
                    className="absolute bottom-4 right-4 text-xs text-[#5eead4] hover:underline"
                  >
                    Expand →
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
