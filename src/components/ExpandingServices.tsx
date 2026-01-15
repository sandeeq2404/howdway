import { useState } from 'react';
import {
  BrainCircuit,
  MessageSquare,
  BarChart3,
  Cpu
} from 'lucide-react';

const services = [
  {
    title: 'AI Chatbots & Assistants',
    description:
      'We build intelligent AI chatbots that automate customer support, internal workflows, and business communication using modern LLMs.',
    icon: MessageSquare,
  },
  {
    title: 'RAG Systems',
    description:
      'Custom Retrieval-Augmented Generation systems that connect your private data with large language models securely and efficiently.',
    icon: BrainCircuit,
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Streaming analytics platforms using Kafka, Pinot, and Iceberg to process millions of events and deliver insights instantly.',
    icon: BarChart3,
  },
  {
    title: 'AI Products & Platforms',
    description:
      'End-to-end AI product development — from model training to scalable deployment for real business use cases.',
    icon: Cpu,
  },
];

export default function ExpandingServices() {
  // null = no card expanded (default view)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col gap-4"
      onMouseLeave={() => setActiveIndex(null)} // 👈 RESET ON LEAVE
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        const isActive = activeIndex === index;

        return (
          <div
            key={service.title}
            onMouseEnter={() => setActiveIndex(index)} // 👈 EXPAND ON HOVER
            className={`cursor-pointer rounded-2xl border border-white/10 bg-[#121418]
              transition-all duration-500 ease-in-out overflow-hidden
              ${isActive ? 'h-56' : 'h-20'}
            `}
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <Icon className="text-[#ff5f5f]" size={22} />
                <h3 className="text-lg font-medium">
                  {service.title}
                </h3>
              </div>

              <div
                className={`mt-4 text-sm text-gray-300 leading-relaxed
                  transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `}
              >
                {service.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
